import './new-program.css';

import React from 'react';
import AddPersonInfo from './../../components/new-program/add-person-info/add-person-info.component';
import Statistics from './../../components/new-program/statistics/statistics.component';
import WeekTable from '../../components/new-program/week-table/week-table.component';
import useProgram from '../../hooks/new-program/useProgram';

const NewProgram = () => {
    const { handleAddProgram, activeDay, setActiveDay, setSelectedCity } = useProgram();

    return (
        <div className='newProgram'>
            <h2 className='titleInNewProgram'>
                new program
            </h2>
            <form onSubmit={handleAddProgram}>
                <div className='personInfoAndStat'>
                    <AddPersonInfo setSelectedCity={setSelectedCity} />
                    <Statistics number_of_meals={0} total_calories={0} />
                </div>
                <div className='weekInfo'>
                    <WeekTable setActiveDay={setActiveDay} activeDay={activeDay} />
                </div>
            </form>
        </div>
    );
};

export default NewProgram;