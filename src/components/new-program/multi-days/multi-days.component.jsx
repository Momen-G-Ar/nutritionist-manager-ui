

import React from 'react';

import Day from '../day/day.component';

/**
 * 
 * @param {{
 *  activeDay:String;
 *  setActiveDay:React.Dispatch<React.SetStateAction<string>>;
 * }} props 
 * @returns 
 */
const MultiDays = (props) => {

    return (
        <>
            <Day
                active={props.activeDay === 'saturday'}
                dayName='saturday'
                top={-32}
                left={-1}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'sunday'}
                dayName='sunday'
                top={-32}
                left={101}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'monday'}
                dayName='monday'
                top={-32}
                left={203}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'tuesday'}
                dayName='tuesday'
                top={-32}
                left={305}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'wednesday'}
                dayName='wednesday'
                top={-32}
                left={407}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'thursday'}
                dayName='thursday'
                top={-32}
                left={509}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'friday'}
                dayName='friday'
                top={-32}
                left={611}
                setActiveDay={props.setActiveDay}
            />
        </>
    );
};

export default MultiDays;