import './food-holder.css';

import React from 'react';

import CustomSpaceSplit from '../custom-space-split/custom-space-split';
import { Trash, PencilSimpleLine } from 'phosphor-react';
import { Image } from 'antd';

/**
 * A card to render the food item description in it
 * @param {{
 *  deleteFoodItem: (id: string) => void;
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
    return (
        <div className='foodHolder'>
            <Image className='customImage' src={props.food.image} alt={props.food.name} />
            <h3>{props.food.name}</h3>
            <h5>amount: {props.food.amount}</h5>
            <h5>calories: {props.food.calories}</h5>
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
                    <PencilSimpleLine
                        size={22}
                        color="#046c41"
                        weight='regular'
                        style={{ cursor: 'pointer' }}
                    />
                </CustomSpaceSplit>
            </div>
        </div>
    );
};

export default FoodItem;