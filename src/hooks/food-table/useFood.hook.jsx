
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

    /**
     * To edit the food item in the table and add the newTable in localStorage
     * @param {{
     *  id:String;
     *  name:String;
     *  image:String;
     *  amount:Number;
     *  calories:Number;
     * }} food 
     */
    const editFoodItem = (food) => {
        const newTable = foodTable.map(item => {
            if (food.id === item.id) {
                item = food;
            }
            return item;
        });
        setFoodTable(newTable);
        localStorage.setItem('food_table', JSON.stringify(newTable));
    };

    const showAddNew = () => {
        setAddNew(false);
    };

    const hideAddNew = () => {
        setAddNew(true);
    };

    return {
        addNew,
        foodTable,
        addFoodItem,
        deleteFoodItem,
        editFoodItem,
        showAddNew,
        hideAddNew,
    };
};

export default useFood;