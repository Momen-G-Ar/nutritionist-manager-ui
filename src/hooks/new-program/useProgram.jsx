import { useState, useReducer } from 'react';
import { reducer } from '../../reducers/client';

/**
* Give a type for the client object
* @type {{
*  id:String;
*  info:{
*      name:String;
*      phone:Number;
*      email:String;
*      date:String;
*      city:String; 
*  };
*  days:{
*      saturday:Array<>; 
*      sunday:Array<>; 
*      monday:Array<>; 
*      tuesday:Array<>;
*      wednesday:Array<>; 
*      thursday:Array<>; 
*      friday:Array<>;     
*  };
* }}
*/
const initialClient = {};


const useProgram = () => {
    const [selectedCity, setSelectedCity] = useState('Hebron');
    const [activeDay, setActiveDay] = useState('saturday');
    const [client, dispatch] = useReducer(reducer, initialClient);
    
    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleAddProgram = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const date = e.target.dater.value;
        const city = selectedCity;

        const id = name + ' ' + new Date().toLocaleDateString() + ' ' + date;
        const info = {
            name, phone, email, date, city
        };
        const days = {
            saturday: [], sunday: [], monday: [], tuesday: [],
            wednesday: [], thursday: [], friday: [],
        };
        const client = { id, info, days };
        console.log(client);
    };


    return {
        activeDay,
        client,
        dispatch,
        handleAddProgram,
        setSelectedCity,
        setActiveDay,
    };
};

export default useProgram;
