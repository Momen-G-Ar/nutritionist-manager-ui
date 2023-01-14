import './statistics.css';

import React from 'react';

import { Button } from 'antd';

/**
 * NOTE: The actual component is under this one 
 * Just a small component to make the actual component more readable
 * @param {Number} calories 
 * @param {Number} meals 
 * @returns 
 */
const Stat = ({ calories, meals }) => {
    return (
        <>
            <span>
                Total Calories(day): {calories}  Kcal
            </span>
            <span>
                Number of Meals: {meals} Meals
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
                    (activeDay === 'saturday') ? <Stat calories={client.status.saturday.calories} meals={client.status.saturday.meals} />
                        : (activeDay === 'sunday') ? <Stat calories={client.status.sunday.calories} meals={client.status.sunday.meals} />
                            : (activeDay === 'monday') ? <Stat calories={client.status.monday.calories} meals={client.status.monday.meals} />
                                : (activeDay === 'tuesday') ? <Stat calories={client.status.tuesday.calories} meals={client.status.tuesday.meals} />
                                    : (activeDay === 'wednesday') ? <Stat calories={client.status.wednesday.calories} meals={client.status.wednesday.meals} />
                                        : (activeDay === 'thursday') ? <Stat calories={client.status.thursday.calories} meals={client.status.thursday.meals} />
                                            : (activeDay === 'friday') ? <Stat calories={client.status.friday.calories} meals={client.status.friday.meals} />
                                                : null
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