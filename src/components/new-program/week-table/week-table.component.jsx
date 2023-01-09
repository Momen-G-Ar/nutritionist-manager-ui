import './week-table.css';

import React from 'react';

import MultiDays from '../multi-days/multi-days.component';

/**
 * To render the whole week days 
 * @param {{
 *  activeDay:String;
 *  setActiveDay:React.Dispatch<React.SetStateAction<string>>;
 * }} props 
 * @returns 
 */
const WeekTable = (props) => {
    return (
        <div className='mainWeek'>
            <MultiDays
                activeDay={props.activeDay}
                setActiveDay={props.setActiveDay}
            />

        </div>
    );
};

export default WeekTable;