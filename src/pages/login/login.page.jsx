import './login.css';

import React from 'react';

// import CustomCarousel from '../../components/common/custom-carousel/custom-carousel';
// import { LOGIN_IMAGES } from '../../data/carousel-images';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CustomInput from './../../components/common/customs-with-theme/custom-input/custom-input';


const prefix_style = {
    color: '#00b96b',
    width: '20px',
    height: '20px',
};


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
                    <CustomInput
                        placeholder="User Name"
                        prefix={<UserOutlined style={prefix_style} />}
                    />
                    <CustomInput
                        placeholder="Password"
                        prefix={<LockOutlined style={prefix_style} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;