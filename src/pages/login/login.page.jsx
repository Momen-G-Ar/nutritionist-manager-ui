import './login.css';

import React, { useContext, useEffect } from 'react';

import { UserContext } from './../../components/providers/user-provider.component';
import { useNavigate } from 'react-router-dom';
import CustomForm from './../../components/login/custom-form/custom-form';
import ImageSlider from '../../components/common/image-slider/image-slider.component';

const Login = () => {
    const user_context = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user_context.user) {
            navigate('/home-page', { replace: true });
        }
    }, [user_context, navigate]);

    return (
        <div className='login'>
            <div className='left'>
                <ImageSlider />
            </div>
            <div className='right'>
                <div className='infoHolder'>
                    <h3>LOGIN</h3>
                    <CustomForm
                        setUser={user_context.setUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;