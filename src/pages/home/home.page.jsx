import './home.css';

import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/common/customs-with-theme/custom-button/custom-button';
import { UserContext } from './../../components/providers/user-provider.component';

// TODO: switch the image line: 14 -> image slider
const HomePage = () => {
    const navigate = useNavigate();
    const user_context = useContext(UserContext);
    useEffect(() => {
        if (!user_context.user) {
            navigate('/login', { replace: true });
        }
    }, [user_context, navigate]);
    return (
        <div className='homePage'>
            <div className='image'>
                <img
                    src="https://tampacardio.com/wp-content/uploads/2021/04/Tampa-cardio-nutritionist-tampa.jpg"
                    alt="food"
                />
            </div>
            <div className='buttons'>
                <CustomButton
                    type='primary'
                    onClick={() => {
                        console.log(1);
                        navigate('/new-program', { replace: true });
                    }}
                >
                    new diet program
                </CustomButton>
                <CustomButton
                    type='primary'
                    onClick={() => navigate('/manage-food-table', { replace: true })}
                >
                    manage food table
                </CustomButton>
                <CustomButton
                    type='primary'
                    onClick={() => navigate('/view-programs', { replace: true })}
                >
                    view existing programs
                </CustomButton>
            </div>
        </div>
    );
};

export default HomePage;