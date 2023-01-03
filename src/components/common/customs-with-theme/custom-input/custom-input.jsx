

import React from 'react';

import { Input, ConfigProvider } from 'antd';

/**
 * 
 * @param {{
 *  placeholder?: string | undefined;
 *  prefix?: React.ForwardRefExoticComponent<Pick<AntdIconProps,"prefix">;
 * }} props 
 * @returns 
 */
const CustomInput = (props) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                },
            }}
        >
            <Input
                placeholder={props.placeholder}
                prefix={props.prefix}
            />
        </ConfigProvider>
    );
};

export default CustomInput;