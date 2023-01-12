import './statistics.css';

import React from 'react';
import { Button } from 'antd';


/**
 * To display the statistics of the current day Cals and Meals and save the new person
 * @param {{
 *  total_calories:Number;
 *  number_of_meals:Number;
 * }} props 
 * @returns 
 */
const Statistics = (props) => {
    //TODO: make the statistics change in each add in the food cards
    return (
        <div className='statistics'>
            <h3>
                Statistics
            </h3>
            <div className='state'>
                <span>
                    {"Total Calories(day): " + props.total_calories + " Kcal"}
                </span>
                <span>
                    {"Number of Meals: " + props.number_of_meals}
                </span>
            </div>
            <div className='saveButton'>
                <Button htmlType='submit' type='primary'>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Statistics;