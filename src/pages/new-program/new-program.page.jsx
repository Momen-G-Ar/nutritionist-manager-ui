import './new-program.css';

import React from 'react';
import AddPersonInfo from './../../components/new-program/add-person-info/add-person-info.component';
import Statistics from './../../components/new-program/statistics/statistics.component';
import { useState } from 'react';

const NewProgram = () => {
    const [selectedCity, setSelectedCity] = useState('Hebron');
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
        const person_info = {
            name, phone, email, date, city
        };
        console.log(person_info);
    };

    return (
        <div className='newProgram'>
            <h2 className='titleInNewProgram'>
                new program
            </h2>
            <form onSubmit={handleAddProgram}>
                <div className='personInfoAndStat'>
                    <AddPersonInfo setSelectedCity={setSelectedCity} />
                    <Statistics />
                </div>
                <input type='submit' value={'submit'} />
            </form>
        </div>
    );
};

export default NewProgram;