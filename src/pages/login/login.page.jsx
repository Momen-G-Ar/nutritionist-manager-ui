import './login.css';

import React, { useContext, useEffect } from 'react';

// import CustomCarousel from '../../components/common/custom-carousel/custom-carousel';
// import { LOGIN_IMAGES } from '../../data/carousel-images';
import { UserContext } from './../../components/providers/user-provider.component';
import { useNavigate } from 'react-router-dom';
import CustomForm from './../../components/login/custom-form/custom-form';

// TODO: delete the image and add carousel line: 15 with its design in css 
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
                {/* <CustomCarousel IMAGES={LOGIN_IMAGES} /> */}
                <img
                    src="https://tampacardio.com/wp-content/uploads/2021/04/Tampa-cardio-nutritionist-tampa.jpg"
                    alt="food"
                />
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