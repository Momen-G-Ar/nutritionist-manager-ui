import './add-food-card.css';

import React from 'react';
import { Button, Select } from 'antd';
import FoodCard from '../food-card/food-card.component';
import useAddFood from '../../../hooks/new-program/useAddFood';

//onClick={() => props.setAddCard(false)}

/**
 * To render component to add food
 * @param {{
 *  setAddCard: React.Dispatch<React.SetStateAction<boolean>>
 *  style:{
 *  display:String;
 *  activeDay:String;
 * }
 * }} props 
 * @returns 
 */
const AddFoodCard = (props) => {
    const { table, selected, handleSelectChange, foodTable } = useAddFood();

    /**
     * To add the food to the active day
     * @param {String} activeDay 
     */
    const handleAddFood = () => {
        if (selected !== -1) {
            props.dispatch({ type: 'ADD_FOOD', food: foodTable[selected], day: props.activeDay });
        }
    };

    const handleCancel = () => {
        props.setAddCard(false);
    };

    return (
        <div className='wrapperInAddCard' style={{ display: props.style.display }}>
            <div className='addCard' >
                <Select
                    defaultValue={'none'}
                    className='select'
                    options={table}
                    onChange={handleSelectChange}
                />
                {
                    (selected !== -1)
                        ? <div className='foodCardInAddCard'>
                            <label>
                                Amount:
                            </label>
                            <FoodCard ind={selected} food={foodTable[selected]} />
                        </div>
                        : null
                }
                <div className='saveAndCancelInAddCard'>
                    <Button type='primary' onClick={() => {
                        handleAddFood();
                        props.setAddCard(false);
                    }}
                    >
                        Save
                    </Button>
                    <Button type='primary' onClick={handleCancel}>Cancel</Button>
                </div>

            </div>
            <div className='back' onClick={handleCancel} >
            </div>
        </div>
    );
};

export default AddFoodCard;