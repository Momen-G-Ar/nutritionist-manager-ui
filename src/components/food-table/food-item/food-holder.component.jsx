import './food-holder.css';

import React, { useState } from 'react';

import CustomSpaceSplit from '../custom-space-split/custom-space-split';
import { Trash, PencilSimpleLine } from 'phosphor-react';
import { Image } from 'antd';
import EditFood from '../edit-food/edit-food.component';

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

    return (
        <div className='foodHolder'>
            {
                edit
                    ? <EditFood editFoodItem={props.editFoodItem} setEdit={setEdit} food={props.food} />
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