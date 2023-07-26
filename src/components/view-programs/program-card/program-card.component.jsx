import './program-card.css';

import React, { useState, useEffect } from 'react';

import { Button } from 'antd';
import { FilePdf, Trash } from 'phosphor-react';
import PDFPrinter from '../PDF-printer/PDF-printer';

const buttonStyle = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    alignItems: 'center',
    paddingLeft: 8,
    width: 80,
};

/**
 * To render the card of the existed client
 * @param {{
 *  client:{
 *      _id:String;
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
const ProgramCard = ({ client, handleDeleteClient }) => {
    const [calories, setCalories] = useState(0.00);
    useEffect(() => {
        let cal = 0.0;
        cal += Number(client.status.saturday[0].calories);
        cal += Number(client.status.sunday[0].calories);
        cal += Number(client.status.monday[0].calories);
        cal += Number(client.status.tuesday[0].calories);
        cal += Number(client.status.wednesday[0].calories);
        cal += Number(client.status.thursday[0].calories);
        cal += Number(client.status.friday[0].calories);
        setCalories(cal.toFixed(2));
    }, [client.status]);

    return (
        <div className='programCard'>
            <h2 className='titleInCard'>
                {client.client.name}
            </h2>
            <h2 className='calsInCard'>
                Calories: {calories} Kcal
            </h2>
            <div className='buttons'>
                <div className='pdf'>
                    <PDFPrinter client={client}>
                        <Button
                            type='primary'
                            style={buttonStyle}
                        >
                            PDF
                        </Button>
                        <FilePdf
                            className='iconInButton'
                            color='#fff'
                            size={20}
                        />
                    </PDFPrinter>
                </div>
                <div className='delete' onClick={() => handleDeleteClient(client._id)}>
                    <Button
                        type='primary'
                        style={buttonStyle}
                    >
                        Delete
                    </Button>
                    <Trash
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