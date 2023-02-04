import './home.css';

import React, { useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { UserContext } from './../../components/providers/user-provider.component';
import { Button } from 'antd';
import ImageSlider from '../../components/common/image-slider/image-slider.component';

const HomePage = () => {
    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (!userContext.user) {
            navigate('/login', { replace: true });
        }
    }, [userContext, navigate]);

    return (
        <div className='homePage'>
            <div className='image'>
                <ImageSlider
                    effect='fade'
                />
            </div>
            <div className='buttons'>
                <Button
                    type='primary'
                    onClick={() => { navigate('/new-program', { replace: true }); }}
                >
                    new diet program
                </Button>
                <Button
                    type='primary'
                    onClick={() => navigate('/manage-food-table', { replace: true })}
                >
                    manage food table
                </Button>
                <Button
                    type='primary'
                    onClick={() => navigate('/view-programs', { replace: true })}
                >
                    view existing programs
                </Button>
            </div>
        </div>
    );
};

export default HomePage;