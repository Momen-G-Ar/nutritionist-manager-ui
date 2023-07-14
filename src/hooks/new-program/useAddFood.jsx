import React from "react";
import foodService from '../../services/food';
import { UserContext } from "../../components/providers/user-provider.component";
const useAddFood = () => {
    const [state, setState] = React.useState({ foodTable: [], table: [] });
    const [selected, setSelected] = React.useState(0);
    const user = React.useContext(UserContext);

    /**
     * To display the selected food
     * @param {String} value 
     */
    const handleSelectChange = (value) => {
        let fi = false;
        state.table.forEach((name, i) => {
            if (name.value === value) {
                fi = true;
                setSelected(i);
            }
        });
        if (!fi)
            setSelected(0);
    };

    const getFoodItems = async () => {
        const items = await foodService.getAllFoods(user.user._id, true);
        if (items) {
            if (items.status === 200) {
                const newTable1 = items.value.foodTable;
                let newTable2=[];
                newTable1.forEach((food) => {
                    newTable2.push({ value: food.name, label: food.name.toUpperCase() });
                });
                setState({ foodTable: newTable1, table: newTable2 });
            }
            else {
                setState({ foodTable: [], table: [] });
                alert(items.message);
            }
        }
        else {
            alert('Internal Server Error');
        }
    };

    React.useMemo(async () => {
        await getFoodItems();
        // eslint-disable-next-line
    }, []);

    return {
        table: state.table,
        foodTable: state.foodTable,
        selected,
        handleSelectChange,
    };
};

export default useAddFood;