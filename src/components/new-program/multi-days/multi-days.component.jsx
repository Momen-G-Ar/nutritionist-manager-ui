

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
                day_name='saturday'
                top={-32}
                left={-1}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'sunday'}
                day_name='sunday'
                top={-32}
                left={101}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'monday'}
                day_name='monday'
                top={-32}
                left={203}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'tuesday'}
                day_name='tuesday'
                top={-32}
                left={305}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'wednesday'}
                day_name='wednesday'
                top={-32}
                left={407}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'thursday'}
                day_name='thursday'
                top={-32}
                left={509}
                setActiveDay={props.setActiveDay}
            />
            <Day
                active={props.activeDay === 'friday'}
                day_name='friday'
                top={-32}
                left={611}
                setActiveDay={props.setActiveDay}
            />
        </>
    );
};

export default MultiDays;