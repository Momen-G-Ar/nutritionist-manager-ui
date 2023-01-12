import { useState, useReducer, useMemo, useContext } from 'react';
import { reducer } from '../../reducers/client';
import { UserContext } from './../../components/providers/user-provider.component';

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
*      saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
*      sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
*      monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
*      tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
*      wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
*      thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
*      friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
*  };
* }}
*/
const initialClient = {
    id: '', info: { name: '', phone: 0, email: '', date: '', city: '' },
    days: {
        saturday: [], sunday: [], monday: [], tuesday: [],
        wednesday: [], thursday: [], friday: []
    }
};

const useProgram = () => {
    const [selectedCity, setSelectedCity] = useState('Hebron');
    const [meals, setMeals] = useState(0);
    const [calories, setCalories] = useState(0);
    const [activeDay, setActiveDay] = useState('saturday');
    const [client, dispatch] = useReducer(reducer, initialClient);
    const [addCard, setAddCard] = useState(false);
    const { user, setUser } = useContext(UserContext);

    useMemo(() => {
        switch (activeDay) {
            case 'saturday': {
                setMeals(client.days.saturday.length);
                setCalories(client.days.saturday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'sunday': {
                setMeals(client.days.sunday.length);
                setCalories(client.days.sunday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'monday': {
                setMeals(client.days.monday.length);
                setCalories(client.days.monday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'tuesday': {
                setMeals(client.days.tuesday.length);
                setCalories(client.days.tuesday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'wednesday': {
                setMeals(client.days.wednesday.length);
                setCalories(client.days.wednesday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'thursday': {
                setMeals(client.days.thursday.length);
                setCalories(client.days.thursday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            case 'friday': {
                setMeals(client.days.friday.length);
                setCalories(client.days.friday.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2));
                break;
            }
            default:
                break;
        }
    }, [client, activeDay]);

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
        const info = { name, phone, email, date, city };

        let newUser = { ...user };
        newUser.ids.push(id);
        setUser(newUser);
        dispatch({ type: 'SAVE_CLIENT', info: info, id: id });
    };


    return {
        addCard, meals, calories, activeDay, client,
        setAddCard, dispatch, handleAddProgram, setSelectedCity, setActiveDay,
    };
};

export default useProgram;
