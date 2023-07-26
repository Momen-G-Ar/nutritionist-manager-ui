
import React, { useState } from 'react';

import { Checkbox, Form, Button, ConfigProvider, Input } from 'antd';
import { handleLogin, setSessionStorage } from '../../../services/login';
import { useNavigate } from 'react-router-dom';


/**
 * Form to take the user info and login its account
 * @param {{
 *  setUser:React.Dispatch<any>;
 * }} props 
 * @returns 
 */
const CustomForm = (props) => {
    const navigate = useNavigate();
    const [wrong, setWrong] = useState(false);
    /**
     * Function to take the input fields and send them to the destination handleLogin
     * @param {{
     *  userName:String;
     *  password:String;
     * }} values 
     */
    const onFinish = async (values) => {
        const result_from_handle = await handleLogin(values.userName, values.password);
        if (result_from_handle) {
            if (result_from_handle.status === 200) {
                setWrong(false);
                props.setUser(result_from_handle.value);
                setSessionStorage(result_from_handle.value);
                navigate('/home-page', { replace: true });
            }
            else {
                setWrong(true);
                alert(result_from_handle.message);
            }
        }
        else {
            alert('Internal Server error');
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <Form
                labelAlign={'left'}
                requiredMark={false}
                colon={false}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                {
                    wrong &&
                    <span
                        style={{
                            display: 'flex',
                            fontFamily: 'sans-serif',
                            fontSize: '16px',
                            textTransform: 'capitalize',
                            color: 'red',
                            justifySelf: 'flex-start',
                            marginBottom: '16px'
                        }}
                    >
                        *invalid credentials
                    </span>
                }
                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 0,
                        span: 10,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 0,
                        span: 10,
                    }}
                >
                    <Button type="primary" htmlType="submit" style={{ width: '305px' }}>
                        Sing in
                    </Button>
                </Form.Item>
            </Form>
        </ConfigProvider>
    );
};

export default CustomForm;