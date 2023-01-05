import './food-table.css';

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFood from './../../hooks/food-table/add-food.hook';

import CustomButton from '../../components/common/customs-with-theme/custom-button/custom-button';
import { UserContext } from './../../components/providers/user-provider.component';
import AddFoodForm from '../../components/food-table/add-food-form/add-food-form.component';
import FoodItem from './../../components/food-table/food-item/food-holder.component';

const FoodTable = () => {
    const { addNew, foodTable, addFoodItem, deleteFoodItem, showAddNew, hideAddNew } = useFood();
    const navigate = useNavigate();
    const user_context = useContext(UserContext);
    useEffect(() => {
        if (!user_context.user) {
            navigate('/login', { replace: true });
        }
    }, [user_context, navigate, foodTable]);

    return (
        <div className='foodTable'>
            <div className='titleAndAdd'>
                <h2>food table</h2>
                {
                    addNew
                        ? <CustomButton type='primary' onClick={showAddNew}>
                            Add New
                        </CustomButton>
                        :
                        <CustomButton type='primary' onClick={hideAddNew}>
                            Hide Add New
                        </CustomButton>
                }
            </div>
            <div className='wrapper'>
                {
                    !addNew &&
                    <AddFoodForm
                        addFoodItem={addFoodItem}
                    />
                }
                <div className='foodItemsHolder'>
                    {
                        foodTable.map((food, i) => {
                            return <FoodItem key={i}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodTable;