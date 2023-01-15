import './program-card.css';

import React, { useEffect, useState } from 'react';

import { Button } from 'antd';
import { FilePdf, Trash } from 'phosphor-react';

const button_style = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
    width: 80,
};

/**
 * To render the card of the existed client
 * @param {{
 *  client:{
 *      id:String;
 *      info:{
 *          name:String;
 *          phone:Number;
 *          email:String;
 *          date:String;
 *          city:String; 
 *      };
 *      days:{
 *          saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *      };
 *      status:{
 *          saturday:{meals:Number; calories:Number;};
 *          sunday:{meals:Number; calories:Number;}; 
 *          monday:{meals:Number; calories:Number;}; 
 *          tuesday:{meals:Number; calories:Number;};
 *          wednesday:{meals:Number; calories:Number;}; 
 *          thursday:{meals:Number; calories:Number;}; 
 *          friday:{meals:Number; calories:Number;};
 *      };
 *  };
 *  handleDeleteClient: ()=>void;
 * }} props 
 * @returns 
 */
const ProgramCard = (props) => {
    const [calories, setCalories] = useState(0.00);
    useEffect(() => {
        let cal = 0.0;
        cal += Number(props.client.status.saturday.calories);
        cal += Number(props.client.status.sunday.calories);
        cal += Number(props.client.status.monday.calories);
        cal += Number(props.client.status.tuesday.calories);
        cal += Number(props.client.status.wednesday.calories);
        cal += Number(props.client.status.thursday.calories);
        cal += Number(props.client.status.friday.calories);
        setCalories(cal.toFixed(2));
    }, []);
    return (
        <div className='programCard'>
            <h2 className='titleInCard'>
                {props.client.info.name}
            </h2>
            <h2 className='calsInCard'>
                Calories: {calories} Kcal
            </h2>

            <div className='buttons'>
                <div className='pdf'>
                    <Button
                        type='primary'
                        style={button_style}
                    >
                        PDF
                    </Button>
                    <FilePdf
                        className='iconInButton'
                        color='#fff'
                        size={20}
                    />
                </div>
                <div className='delete' onClick={() => props.handleDeleteClient(props.client)}>
                    <Button
                        type='primary'
                        style={button_style}
                    >
                        Delete
                    </Button>
                    <Trash
                        onClick={() => props.handleDeleteClient(props.client)}
                        style={{ cursor: 'pointer' }}
                        className='iconInButton'
                        color='#fff'
                        size={18}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgramCard;