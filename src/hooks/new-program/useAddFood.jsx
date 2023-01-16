import { useMemo, useState } from "react";
import useFood from "../food-table/useFood.hook";

const useAddFood = () => {
    const { foodTable } = useFood();
    const [table, setTable] = useState([]);
    const [selected, setSelected] = useState(-1);

    /**
     * To store the names of the foods in a new table
     * @param {Array<>} foodTable 
    */
    const getTable = () => {
        let newTable = [];
        foodTable.forEach((food) => {
            newTable.push({ value: food.name, label: food.name.toUpperCase() });
        });
        return newTable;
    };

    /**
     * To display the selected food
     * @param {String} value 
     */
    const handleSelectChange = (value) => {
        let fi = false;
        table.forEach((name, i) => {
            if (name.value === value) {
                fi = true;
                setSelected(i);
            }
        });
        if (!fi)
            setSelected(-1);
    };

    useMemo(() => {
        const newTab = getTable();
        setTable(newTab);
        // eslint-disable-next-line
    }, [foodTable]);

    return {
        table,
        foodTable,
        selected,
        handleSelectChange,
    };
};

export default useAddFood;