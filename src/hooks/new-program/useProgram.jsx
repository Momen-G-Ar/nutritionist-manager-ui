import { useState } from 'react';

const useProgram = () => {
    const [selectedCity, setSelectedCity] = useState('Hebron');
    const [activeDay, setActiveDay] = useState('saturday');

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
        const person_info = {
            name, phone, email, date, city
        };
        const days = {
            saturday: [], sunday: [], monday: [], tuesday: [],
            wednesday: [], thursday: [], friday: [],
        };
        const client = { id, person_info, days };
        console.log(client);
    };


    return {
        activeDay,
        handleAddProgram,
        setSelectedCity,
        setActiveDay,
    };
};

export default useProgram;
