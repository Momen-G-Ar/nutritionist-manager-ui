import './food-card.css';

import React from 'react';
import { Image } from 'antd';
import { Trash } from 'phosphor-react';

/**
 * To render each food alone in the specific day
 * @param {{
 * ind:Number;
 * day:String;
 * food: {
 *  id: string;
 *  name: string;
 *  image: string;
 *  amount: number;
 *  calories: number;
 * };
 * dispatch:React.Dispatch<{
 *   type: string;
 *   day: string;
 *   food: {
 *       id: string;
 *       name: string;
 *       image: string;
 *       amount: number;
 *       calories: number;
 *   };
 *  }>
 * }} props 
 * @returns 
 */
const FoodCard = (props) => {

    const handleDeleteFood = () => {
        props.dispatch({ ind: props.ind, type: 'DELETE_FOOD', day: props.day });
    };

    return (
        <div className='foodCard'>
            <span className='customImage'>
                <Image src={props.food.image} />
            </span>
            <div className='infoHolder'>
                <span>{props.food.name}</span>
                <span>amount: {props.food.amount}</span>
                <span>calories: {props.food.calories}</span>
                <span className='trash'>
                    <Trash
                        size={22}
                        color="#046c41"
                        weight='regular'
                        style={{ cursor: 'pointer', marginRight: '5px', marginBottom: '5px' }}
                        onClick={handleDeleteFood}
                    />
                </span>
            </div>
        </div>
    );
};

export default FoodCard;