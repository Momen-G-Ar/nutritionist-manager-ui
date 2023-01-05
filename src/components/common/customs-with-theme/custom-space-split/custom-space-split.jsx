
import React from 'react';
import { Divider, Space } from 'antd';

const border_style = {
    position: 'relative',
    top: '-0.06em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '1.7em',
    margin: '0 8px',
    verticalAlign: 'middle',
    borderTop: '0',
    borderInlineStart: '0.14em solid green',
};

/**
 * To split between the children of the component
 * @param {{
 *  children:React.ReactNode;
 * }} props 
 * @returns 
 */
const CustomSpaceSplit = (props) => {
    return (
        <Space split={<Divider type='vertical' style={border_style} />}>
            {props.children}
        </Space >
    );
};

export default CustomSpaceSplit;