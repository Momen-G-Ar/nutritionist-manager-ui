import './home.css';

import React from 'react';

import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/common/custom-button/custom-button';


const HomePage = () => {
    const navigate = useNavigate();

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
                    onClick={() => navigate('/new-program', { replace: true })}
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