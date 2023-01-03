import React from 'react';
import { Button, ConfigProvider } from 'antd';

/**
 * To use the customized buttons without configProvider each time
 * @param {{
 *  value:String;
 *  type?:String;
 *  onClick?: (React.MouseEventHandler<HTMLAnchorElement> & 
 *      React.MouseEventHandler<HTMLButtonElement>) | undefined;
 *  children:never[];
 * }} props 
 * @returns 
 */
const CustomButton = (props) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <Button
                className={props.className}
                type={props.type}
                onClick={() => props.onClick}
            >
                {props.children}
            </Button>
        </ConfigProvider>
    );
};

export default CustomButton;