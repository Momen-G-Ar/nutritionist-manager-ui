import './statistics.css';

import React from 'react';

import { Button } from 'antd';

/**
 * To display the statistics of the current day Cals and Meals and save the new person
 * @param {{
 *  meals:Number;
 *  calories:Number;
 * }} props 
 * @returns 
 */
const Statistics = ({ meals, calories }) => {
    //TODO: make the statistics change in each add in the food cards
    return (
        <div className='statistics'>
            <h3>
                Statistics
            </h3>
            <div className='state'>
                <span>
                    {"Total Calories(day): " + calories + " Kcal"}
                </span>
                <span>
                    {"Number of Meals: " + meals}
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