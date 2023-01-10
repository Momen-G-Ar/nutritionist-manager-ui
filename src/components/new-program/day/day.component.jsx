import './day.css';

import React from 'react';


/**
 * To render the days
 * @param {{
 *  day_name:String;
 *  top:Number;
 *  left:Number;
 *  active:Boolean;
 *  setActiveDay:React.Dispatch<React.SetStateAction<null>>;
 * }} props 
 * @returns 
 */
const Day = (props) => {
    
    const handleActivateDate = () => {
        props.setActiveDay(props.day_name);
    };

    return (
        <span
            onClick={handleActivateDate}
            className={`${props.active ? 'active' : 'day'}`}
            style={{ top: `${props.top}px`, left: `${props.left}px` }}
        >
            {props.day_name}
        </span>
    );
};

export default Day;