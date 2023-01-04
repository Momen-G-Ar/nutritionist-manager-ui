import './food-table.css';

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/common/customs-with-theme/custom-button/custom-button';
import { UserContext } from './../../components/providers/user-provider.component';

const FoodTable = () => {
    const navigate = useNavigate();
    const user_context = useContext(UserContext);
    const [addNew, setAddNew] = useState(false);


    useEffect(() => {
        if (!user_context.user) {
            navigate('/login', { replace: true });
        }
    }, [user_context, navigate]);

    return (
        <div className='foodTable'>
            <div className='titleAndAdd'>
                <h2>food table</h2>
                <CustomButton type='primary' >
                    Add New
                </CustomButton>
            </div>
            <div className='wrapper'>
                <div className='food'>
                    <div className='addNew'>

                    </div>
                    <div className='foodItemHolder'>
                        <div className='foodHolder'>

                        </div>
                    </div>
                </div>
                <div className='statistics'>

                </div>
            </div>

        </div>
    );
};

export default FoodTable;