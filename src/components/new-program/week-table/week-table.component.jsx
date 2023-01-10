import './week-table.css';

import React from 'react';

import MultiDays from '../multi-days/multi-days.component';
import FoodCard from './../food-card/food-card.component';
import { Plus } from 'phosphor-react';

/**
 * To render the whole week days 
 * @param {{
 *  activeDay:String;
 *  setActiveDay:React.Dispatch<React.SetStateAction<string>>;
 *  client:{
 *  id:String;
 *  info:{
 *      name:String;
 *      phone:Number;
 *      email:String;
 *      date:String;
 *      city:String; 
 *  };
 *  days:{saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *  };
 * };
 * dispatch: React.Dispatch<{
 *   type: string;
 *   day: string;
 *   food: {
 *       id: string;
 *       name: string;
 *       image: string;
 *       amount: number;
 *       calories: number;
 *   };
 *  }>
 * }} props 
 * @returns 
 */
const WeekTable = ({ activeDay, client, dispatch, setActiveDay }) => {
    return (
        <div className='mainWeek'>
            <MultiDays
                activeDay={activeDay}
                setActiveDay={setActiveDay}
            />
            <div className='daysHolder'>
                {
                    (activeDay === 'saturday') ? client.days.saturday.map((food, i) => <FoodCard key={i + ' ' + food + ' saturday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                        : (activeDay === 'sunday') ? client.days.sunday.map((food, i) => <FoodCard key={i + ' ' + food + ' sunday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                            : (activeDay === 'monday') ? client.days.monday.map((food, i) => <FoodCard key={i + ' ' + food + ' monday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                                : (activeDay === 'tuesday') ? client.days.tuesday.map((food, i) => <FoodCard key={i + ' ' + food + ' tuesday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                                    : (activeDay === 'wednesday') ? client.days.wednesday.map((food, i) => <FoodCard key={i + ' ' + food + ' wednesday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                                        : (activeDay === 'thursday') ? client.days.thursday.map((food, i) => <FoodCard key={i + ' ' + food + ' thursday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                                            : (activeDay === 'friday') ? client.days.friday.map((food, i) => <FoodCard key={i + ' ' + food + ' friday'} food={food} dispatch={dispatch} day={activeDay} ind={i} />)
                                                : null
                }
                <div className='clickToAddFood'>
                    <Plus
                        size={32}
                        weight='regular'
                    />
                </div>
            </div>
        </div>
    );
};

export default WeekTable;