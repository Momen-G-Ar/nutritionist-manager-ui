import './food-table.css';

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFood from './../../hooks/food-table/add-food.hook';

import { UserContext } from './../../components/providers/user-provider.component';
import AddFoodForm from '../../components/food-table/add-food-form/add-food-form.component';
import FoodItem from './../../components/food-table/food-item/food-holder.component';
import { Button } from 'antd';

const FoodTable = () => {
    const { addNew, foodTable, addFoodItem, deleteFoodItem, showAddNew, hideAddNew } = useFood();
    const navigate = useNavigate();
    const user_context = useContext(UserContext);

    useEffect(() => {
        if (!user_context.user) {
            navigate('/login', { replace: true });
        }
    }, [user_context, navigate]);

    return (
        <div className='foodTable'>
            <div className='titleAndAdd'>
                <h2>food table</h2>
                {
                    addNew
                        ? <Button type='primary' onClick={showAddNew}>
                            Add New
                        </Button>
                        :
                        <Button type='primary' onClick={hideAddNew}>
                            Hide Add New
                        </Button>
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
                            return <FoodItem
                                key={i}
                                food={food}
                                deleteFoodItem={deleteFoodItem}
                            />;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodTable;