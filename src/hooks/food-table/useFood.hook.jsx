import React from "react";
import foodService from '../../services/food';
import { UserContext } from "../../components/providers/user-provider.component";
const useFood = () => {
    /**
    * To give a types fo the food table
    * @type {Array<{
    *  _id: String;
    *  name: String;
    *  image: String;
    *  amount: Number;
    *  calories: Number;
    *  addedBy:string
    * }>[]} 
    */
    const [foodTable, setFoodTable] = React.useState([]);
    const [addNew, setAddNew] = React.useState(true);
    const user = React.useContext(UserContext);

    /**
     * To delete item from the table and edit the local storage to the new table
     * @param {String} _id 
     */
    const deleteFoodItem = async (_id) => {
        const deleteItem = await foodService.deleteFood(_id, user.user._id);
        if (deleteItem) {
            if (deleteItem.status === 200) {
                await getFoodItems();
                alert(deleteItem.message);
            }
            else {
                alert(deleteItem.message);
            }
        }
        else {
            alert('Internal Server Error');
        }
    };

    /**
     * To edit the food item in the table and add the newTable in localStorage
     * @param {{
     *  _id:String;
     *  name:String;
     *  image:String;
     *  amount:Number;
     *  calories:Number;
     * }} food 
     */
    const editFoodItem = async (food) => {
        food.addedBy = user.user._id;
        const updateFood = await foodService.updateFood(food);
        if (updateFood) {
            if (updateFood.status === 200) {
                await getFoodItems();
                alert(updateFood.message);
            }
            else {
                alert(updateFood.message);
            }
        }
        else {
            alert('Internal Server Error');
        }
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
    const handleAddFood = async (e) => {
        e.preventDefault();
        const name = e.target.name.value; e.target.name.value = '';
        const image = e.target.image.value; e.target.image.value = '';
        const amount = Number(e.target.amount.value); e.target.amount.value = '';
        const calories = Number(e.target.calories.value); e.target.calories.value = '';

        const food = { name, image, amount, calories, addedBy: user.user._id };
        const addItem = await foodService.AddFood(food);
        if (addItem) {

            if (addItem.status === 201) {
                alert(addItem.message);
                await getFoodItems();
            }
            else {
                alert(addItem.message);
            }
        }
        else {
            alert('Internal Server Error');
        }
    };

    const getFoodItems = async () => {
        const items = await foodService.getAllFoods(user.user._id, true);
        if (items) {

            if (items.status === 200) {
                setFoodTable(items.value.foodTable);
            }
            else {
                setFoodTable([]);
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
        addNew,
        foodTable,
        deleteFoodItem,
        editFoodItem,
        showAddNew,
        hideAddNew,
        handleAddFood,
    };
};

export default useFood;