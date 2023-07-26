import './food-card.css';

import React from 'react';
import { Image } from 'antd';
import { Trash } from 'phosphor-react';

/**
 * To render each food alone in the specific day
 * @param {{
 * ind:Number;
 * day?:String;
 * food: {
 *  id: string;
 *  name: string;
 *  image: string;
 *  amount: number;
 *  calories: number;
 * };
 * dispatch?:React.Dispatch<{
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
        <>
            {props.food &&
                <div className='foodCard'>
                    <span className='customImage'>
                        <Image src={props.food.image} />
                    </span>
                    <div className='infoHolder'>
                        <span style={{ fontSize: 20 }}>{props.food.name}</span>
                        <span>calories: {props.food.calories}Kcal</span>
                        <span>amount: {props.food.amount}(G\Ml)</span>
                        {
                            props.dispatch
                                ? <span className='trash'>
                                    <Trash
                                        size={22}
                                        color="#089f17"
                                        weight='regular'
                                        style={{ cursor: 'pointer', marginRight: '5px', marginBottom: '5px' }}
                                        onClick={handleDeleteFood}
                                    />
                                </span>
                                : null
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default FoodCard;