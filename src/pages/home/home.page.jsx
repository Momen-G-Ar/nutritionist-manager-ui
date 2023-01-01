import './home.css';

import React from 'react';


import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/common/primary-button/primary-button';


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

                <PrimaryButton
                    type='primary'
                    onClick={() => navigate('/new-program', { replace: true })}
                >
                    new diet program
                </PrimaryButton>
                <PrimaryButton
                    type='primary'
                    onClick={() => navigate('/manage-food-table', { replace: true })}
                >
                    manage food table
                </PrimaryButton>
                <PrimaryButton
                    type='primary'
                    onClick={() => navigate('/view-programs', { replace: true })}
                >
                    view existing programs
                </PrimaryButton>

            </div>
        </div>
    );
};

export default HomePage;