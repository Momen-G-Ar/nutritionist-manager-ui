import { useState, useReducer, useMemo, useContext, useEffect } from 'react';
import { reducer } from '../../reducers/client';
import { UserContext } from './../../components/providers/user-provider.component';
import { useNavigate } from 'react-router-dom';

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
    const { user, editUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user)
            navigate('/login', { replace: true });
    }, [user, navigate]);

    /**
     * To change the statistics on each change
     * @param {Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>} day 
     */
    const handleAddFood = (day) => {
        const len = day.length;
        const cals = day.reduce((prev, food) => prev + (food.calories / food.amount), 0).toFixed(2);
        setMeals(len);
        setCalories(cals);
    };

    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleAddProgram = (e) => {
        e.preventDefault();
        const name = e.target.name.value; e.target.name.value = '';
        const phone = e.target.phone.value; e.target.phone.value = '';
        const email = e.target.email.value; e.target.email.value = '';
        const date = e.target.dater.value; e.target.dater.value = '';
        const city = selectedCity;

        const id = name + ' ' + new Date().toLocaleDateString() + ' ' + date;
        const info = { name, phone, email, date, city };

        let newUser = { ...user };
        newUser.ids.push(id);
        
        editUser(newUser);
        dispatch({ type: 'SAVE_CLIENT', info: info, id: id });
    };

    useMemo(() => {
        switch (activeDay) {
            case 'saturday': {
                handleAddFood(client.days.saturday);
                break;
            }
            case 'sunday': {
                handleAddFood(client.days.sunday);
                break;
            }
            case 'monday': {
                handleAddFood(client.days.monday);
                break;
            }
            case 'tuesday': {
                handleAddFood(client.days.tuesday);
                break;
            }
            case 'wednesday': {
                handleAddFood(client.days.wednesday);
                break;
            }
            case 'thursday': {
                handleAddFood(client.days.thursday);
                break;
            }
            case 'friday': {
                handleAddFood(client.days.friday);
                break;
            }
            default:
                break;
        }
        // eslint-disable-next-line
    }, [client, activeDay]);

    return {
        addCard, meals, calories, activeDay, client, setMeals, setCalories,
        setAddCard, dispatch, handleAddProgram, setSelectedCity, setActiveDay,
    };
};

export default useProgram;
