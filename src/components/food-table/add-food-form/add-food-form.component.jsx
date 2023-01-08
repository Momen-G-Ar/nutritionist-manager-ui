import './add-food-form.css';

import React from 'react';
import Input from '../../common/input/input';
import { Button } from 'antd';

/**
 * Form to add food to the foodTable
 * @param {{
 *  addFoodItem:(food:{
 *  id: string;
 *  name: string;
 *  image: string;
 *  amount: number;
 *  calories: number;
 * }) => void
 * }} props 
 * @returns 
 */
const AddFoodForm = (props) => {
    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleAddFood = (e) => {
        e.preventDefault();
        const id = String(new Date().getMilliseconds()) + " " + String(new Date());
        const name = e.target.name.value; e.target.name.value = "";
        const image = e.target.image.value; e.target.image.value = "";
        const amount = Number(e.target.amount.value); e.target.amount.value = "";
        const calories = Number(e.target.calories.value); e.target.calories.value = "";

        const food = {
            id, name, image, amount, calories
        };
        props.addFoodItem(food);
    };

    return (
        <div className="addNewFood">
            <form onSubmit={handleAddFood}>
                <div className='inputInForm'>
                    <Input
                        name='name'
                        label='Name'
                        required
                    />
                    <Input
                        name='image'
                        label='image src'
                        required
                    />
                    <Input
                        name='amount'
                        label='amount'
                        required
                    />
                    <Input
                        name='calories'
                        label='calories'
                        required
                    />
                </div>
                <div className="buttonInForm">
                    <Button
                        htmlType="submit"
                        type='primary'
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddFoodForm;