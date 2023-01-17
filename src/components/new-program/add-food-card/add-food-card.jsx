import './add-food-card.css';

import React from 'react';
import { Button, Select } from 'antd';
import FoodCard from '../food-card/food-card.component';
import useAddFood from '../../../hooks/new-program/useAddFood';
import Input from './../../common/input/input';

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
     * @param {React.FormEvent<HTMLFormElement>} e 
     */
    const handleAddFood = (e) => {
        e.preventDefault();
        const amount = Number(e.target.amount.value); e.target.amount.value = '';
        props.dispatch({ type: 'ADD_FOOD', food: foodTable[selected], day: props.activeDay, amount: amount });
        props.setAddCard(false);

    };

    const handleCancel = () => {
        props.setAddCard(false);
    };

    return (
        <div className='wrapperInAddCard' style={{ display: props.style.display }}>
            <div className='addCard' >
                <form onSubmit={(e) => handleAddFood(e)}>
                    <div className='inputInAddCard'>
                        <Select
                            defaultValue={table[0] || 'none'}
                            className='select'
                            options={table}
                            onChange={handleSelectChange}
                        />
                        <Input type={'number'} label={'Amount'} required name='amount' />
                    </div>
                    <div className='foodCardInAddCard'>
                        <FoodCard ind={selected} food={foodTable[selected]} />
                    </div>

                    <div className='saveAndCancelInAddCard'>
                        <Button type='primary' htmlType='submit'>
                            Save
                        </Button>
                        <Button type='primary' onClick={handleCancel}>Cancel</Button>
                    </div>
                </form>
            </div>
            <div className='back' onClick={handleCancel} >
            </div>
        </div>
    );
};

export default AddFoodCard;