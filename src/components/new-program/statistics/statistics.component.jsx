import './statistics.css';

import React from 'react';

import { Button } from 'antd';

/**
 * 
 * @param {{
 *  meals:Number;
 *  calories:Number;
 * }} props 
 * @returns 
 */
const Stat = (props) => {
    return (
        <>
            <span>
                Total Calories(day): {props.calories}  Kcal
            </span>
            <span>
                Number of Meals: {props.meals} Meals
            </span>
        </>
    );
};

/**
 * To display the statistics of the current day Cals and Meals and save the new person
 * @param {{
 *  activeDay:String;
 *  client:{
 *  id:String;
 *  info:{
 *      name:String;
 *      phone:Number;
 *      email:String;
 *      date:String;
 *      city:String; 
 *  };
 *  days:{
 *      saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *  };
 * status:{
 *       saturday:{meals:Number; calories:Number;};
 *       sunday:{meals:Number; calories:Number;}; 
 *       monday:{meals:Number; calories:Number;}; 
 *       tuesday:{meals:Number; calories:Number;};
 *       wednesday:{meals:Number; calories:Number;}; 
 *       thursday:{meals:Number; calories:Number;}; 
 *       friday:{meals:Number; calories:Number;};
 *  };
 * }
 * }} props 
 * @returns 
*/
const Statistics = ({ client, activeDay }) => {
    return (
        <div className='statistics'>
            <h3>
                Statistics
            </h3>
            <div className='state'>
                {
                    client.status[activeDay] &&
                    <Stat calories={client.status[activeDay].calories} meals={client.status[activeDay].meals} />
                }
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