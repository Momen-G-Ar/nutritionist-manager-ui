import { useState, useReducer, useContext, useEffect } from 'react';
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
*  status:{
*       saturday:{meals:Number; calories:Number;};
*       sunday:{meals:Number; calories:Number;}; 
*       monday:{meals:Number; calories:Number;}; 
*       tuesday:{meals:Number; calories:Number;};
*       wednesday:{meals:Number; calories:Number;}; 
*       thursday:{meals:Number; calories:Number;}; 
*       friday:{meals:Number; calories:Number;};
*  };
* }}
*/
const initialClient = {
    id: '', info: { name: '', phone: 0, email: '', date: '', city: '' },
    days: {
        saturday: [], sunday: [], monday: [], tuesday: [],
        wednesday: [], thursday: [], friday: []
    },
    status: {
        saturday: { meals: 0, calories: 0 }, sunday: { meals: 0, calories: 0 },
        monday: { meals: 0, calories: 0 }, tuesday: { meals: 0, calories: 0 },
        wednesday: { meals: 0, calories: 0 }, thursday: { meals: 0, calories: 0 },
        friday: { meals: 0, calories: 0 }
    }
};

const useProgram = () => {
    const [selectedCity, setSelectedCity] = useState('Hebron');
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

    return {
        addCard, activeDay, client,
        setAddCard, dispatch, handleAddProgram, setSelectedCity, setActiveDay,
    };
};

export default useProgram;
