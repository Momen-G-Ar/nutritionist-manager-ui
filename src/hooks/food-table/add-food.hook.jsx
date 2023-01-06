
import { useState } from "react";






const useFood = () => {
    /**
    * To give a types fo the food table
    * @type {Array<{
    *  id: String;
    *  name: String;
    *  image: String;
    *  amount: Number;
    *  calories: Number;
    * }>[]} 
    */
    const [foodTable, setFoodTable] = useState(JSON.parse(localStorage.getItem('food_table')) || []);
    const [addNew, setAddNew] = useState(false);

    /**
     * To add new item to the table and edit the local storage to the new table
     * @param {{
     *  id:String;
     *  name:String;
     *  image:String;
     *  amount:Number;
     *  calories:Number;
     * }} food 
     */
    const addFoodItem = (food) => {
        const newTable = [...foodTable, food];
        setFoodTable(newTable);
        localStorage.setItem('food_table', JSON.stringify(newTable));
    };

    /**
     * To delete item from the table and edit the local storage to the new table
     * @param {String} id 
     */
    const deleteFoodItem = (id) => {
        const newTable = foodTable.filter((food) => (food.id !== id));
        setFoodTable(newTable);
        localStorage.setItem('food_table', JSON.stringify(newTable));
    };

    const showAddNew = () => {
        setAddNew(true);
    };

    const hideAddNew = () => {
        setAddNew(false);
    };

    return {
        addNew,
        foodTable,
        addFoodItem,
        deleteFoodItem,
        showAddNew,
        hideAddNew,
    };
};

export default useFood;