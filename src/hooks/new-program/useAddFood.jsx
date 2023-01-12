import { useMemo, useState } from "react";
import useFood from "../food-table/useFood.hook";
import useProgram from "./useProgram";

const useAddFood = () => {
    const { foodTable } = useFood();
    const { dispatch } = useProgram();
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

    /**
     * To add the food to the active day
     * @param {String} activeDay 
     */
    const handleAddFood = (activeDay) => {
        if (selected !== -1) {
            dispatch({ type: 'ADD_FOOD', food: foodTable[selected], day: activeDay });
        }
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
        handleAddFood,
    };
};

export default useAddFood;