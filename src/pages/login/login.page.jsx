import './login.css';

import React from 'react';

// import CustomCarousel from '../../components/common/custom-carousel/custom-carousel';
// import { LOGIN_IMAGES } from '../../data/carousel-images';
import CustomForm from '../../components/common/customs-with-theme/custom-form/custom-form';

// TODO: delete the image and add carousel line: 15 with its design in css 
const Login = () => {


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
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;