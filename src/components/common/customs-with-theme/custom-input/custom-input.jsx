

import React from 'react';

import { Input, ConfigProvider } from 'antd';

/**
 * To use the customized buttons without configProvider each time
 * @param {{
 *  placeholder?: string | undefined;
 *  prefix?: React.ForwardRefExoticComponent<Pick<AntdIconProps,"prefix">;
 *  label:String;
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
                label={props.label}
                placeholder={props.placeholder}
                prefix={props.prefix}
            />
        </ConfigProvider>
    );
};

export default CustomInput;