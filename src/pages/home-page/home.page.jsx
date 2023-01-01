import './home.css';

import React from 'react';

import { Button, ConfigProvider } from 'antd';

import { useNavigate } from 'react-router-dom';


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
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#00b96b',
                        },
                    }}
                >

                    <Button
                        type='primary'
                        onClick={() => navigate('/new-diet-program')}
                    >
                        new diet program
                    </Button>
                    <Button
                        type='primary'
                        onClick={() => navigate('/manage-food-table')}
                    >
                        manage food table
                    </Button>
                    <Button
                        type='primary'
                        onClick={() => navigate('/view-programs')}
                    >
                        view existing programs
                    </Button>
                </ConfigProvider>
            </div>
        </div>
    );
};

export default HomePage;