import './login.css';

import React, { useContext, useEffect } from 'react';

import { UserContext } from './../../components/providers/user-provider.component';
import { useNavigate } from 'react-router-dom';
import CustomForm from './../../components/login/custom-form/custom-form';
import ImageSlider from '../../components/common/image-slider/image-slider.component';

const Login = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (userContext.user) {
            navigate('/home-page', { replace: true });
        }
    }, [userContext, navigate]);

    return (
        <div className='login'>
            <div className='left'>
                <ImageSlider />
            </div>
            <div className='right'>
                <div className='infoHolder'>
                    <h3>LOGIN</h3>
                    <CustomForm
                        setUser={userContext.setUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;