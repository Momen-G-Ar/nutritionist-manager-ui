import './edit-food.css';

import React from 'react';
import Input from '../../common/input/input';
import { Button } from 'antd';

/**
* A card to render the edit food item
* @param {{
*  setEdit: React.Dispatch<React.SetStateAction<boolean>>
*  editFoodItem: (food: {
*  id: string;
*  name: string;
*  image: string;
*  amount: number;
*  calories: number;
*  }) => void
*  food:{
*      _id: string;
*      name: string;
*      image: string;
*      amount: number;
*      calories: number;
*  };
* }} props 
* @returns 
*/
const EditFood = (props) => {
    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleEditFood = (e) => {
        e.preventDefault();
        const _id = props.food._id;
        const name = e.target.name.value;
        const image = e.target.image.value;
        const amount = Number(e.target.amount.value);
        const calories = Number(e.target.calories.value);
        const food = {
            _id, name, image, amount, calories
        };
        props.editFoodItem(food);
        props.setEdit(false);
    };

    return (
        <form onSubmit={handleEditFood}>
            <Input defaultValue={props.food.name} label={'name'} name={'name'} required />
            <Input defaultValue={props.food.image} type={'text'} label={'image src'} name={'image'} />
            <Input defaultValue={props.food.amount} label={'amount'} name={'amount'} required type={'number'} />
            <Input defaultValue={props.food.calories} label={'calories'} name={'calories'} required type={'number'} />
            <div className='saveAndCancel'>
                <Button type='primary' htmlType='submit'>Save</Button>
                <Button type='primary' onClick={() => props.setEdit(false)}>Cancel</Button>
            </div>
        </form>

    );
};

export default EditFood;