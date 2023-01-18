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
    const [addNew, setAddNew] = useState(true);
    const [imageFile, setImageFile] = useState('');

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

    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleAddFood = (e) => {
        e.preventDefault();
        const id = String(new Date().getMilliseconds()) + " " + String(new Date());
        const name = e.target.name.value; e.target.name.value = '';
        const image = imageFile; setImageFile(''); e.target.image.value = '';
        const amount = Number(e.target.amount.value); e.target.amount.value = '';
        const calories = Number(e.target.calories.value); e.target.calories.value = '';

        const food = {
            id, name, image, amount, calories
        };
        addFoodItem(food);
    };

    /**
    * Handler function for the file change event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleImageChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener('load', () => {
            setImageFile(reader.result);
        });
    };

    return {
        addNew,
        foodTable,
        deleteFoodItem,
        editFoodItem,
        showAddNew,
        hideAddNew,
        handleAddFood,
        handleImageChange,
    };
};

export default useFood;