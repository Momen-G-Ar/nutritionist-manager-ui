import './food-holder.css';

import React, { useState } from 'react';

import CustomSpaceSplit from '../custom-space-split/custom-space-split';
import { Trash, PencilSimpleLine } from 'phosphor-react';
import { Button, Image } from 'antd';
import Input from '../../common/input/input';

/**
 * A card to render the food item description in it
 * @param {{
 *  deleteFoodItem: (id: string) => void;
 *  editFoodItem: (food: {
 *  id: string;
 *  name: string;
 *  image: string;
 *  amount: number;
 *  calories: number;
 *  }) => void
 *  food:{
 *      id: string;
 *      name: string;
 *      image: string;
 *      amount: number;
 *      calories: number;
 *  };
 * }} props 
 * @returns 
 */
const FoodItem = (props) => {
    const [edit, setEdit] = useState(false);

    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleEditFood = (e) => {
        e.preventDefault();
        const id = props.food.id;
        const name = e.target.name.value;
        const image = e.target.image.value;
        const amount = Number(e.target.amount.value);
        const calories = Number(e.target.calories.value);

        const food = {
            id, name, image, amount, calories
        };
        props.editFoodItem(food);
        setEdit(false);
    };

    return (
        <div className='foodHolder'>
            {
                edit
                    ? <>
                        <form onSubmit={handleEditFood}>
                            <Input defaultValue={props.food.name} label={'name'} name={'name'} required />
                            <Input defaultValue={props.food.image} label={'image src'} name={'image'} required />
                            <Input defaultValue={props.food.amount} label={'amount'} name={'amount'} required />
                            <Input defaultValue={props.food.calories} label={'calories'} name={'calories'} required />
                            <div className='saveAndCancel'>
                                <Button type='primary' htmlType='submit'>Save</Button>
                                <Button type='primary' onClick={() => setEdit(false)}>Cancel</Button>
                            </div>
                        </form>
                    </>
                    : <>
                        <Image className='customImage' src={props.food.image} alt={props.food.name} />
                        <h3>{props.food.name}</h3>
                        <h5> amount: {props.food.amount + " (g\\ml)"} </h5>
                        <h5> calories: {props.food.calories + " Kcal"} </h5>
                        <div className='buttons'>
                            <CustomSpaceSplit>
                                <span onClick={() => { props.deleteFoodItem(props.food.id); }}>
                                    <Trash
                                        size={22}
                                        color="#046c41"
                                        weight='regular'
                                        style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                <span onClick={() => setEdit(true)}>
                                    <PencilSimpleLine
                                        size={22}
                                        color="#046c41"
                                        weight='regular'
                                        style={{ cursor: 'pointer' }}
                                    />
                                </span>
                            </CustomSpaceSplit>
                        </div>
                    </>
            }
        </div>
    );
};

export default FoodItem;