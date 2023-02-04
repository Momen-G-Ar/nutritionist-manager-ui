import './day.css';

import React from 'react';


/**
 * To render the days label exits above the week div
 * @param {{
 *  dayName:String;
 *  top:Number;
 *  left:Number;
 *  active:Boolean;
 *  setActiveDay:React.Dispatch<React.SetStateAction<null>>;
 * }} props 
 * @returns 
 */
const Day = (props) => {

    const handleActivateDate = () => {
        props.setActiveDay(props.dayName);
    };

    return (
        <span
            onClick={handleActivateDate}
            className={`${props.active ? 'active' : 'day'}`}
            style={{ top: `${props.top}px`, left: `${props.left}px` }}
        >
            {props.dayName}
        </span>
    );
};

export default Day;