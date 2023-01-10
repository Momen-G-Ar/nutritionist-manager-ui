import './new-program.css';

import React from 'react';
import useProgram from '../../hooks/new-program/useProgram';

import AddPersonInfo from './../../components/new-program/add-person-info/add-person-info.component';
import Statistics from './../../components/new-program/statistics/statistics.component';
import WeekTable from '../../components/new-program/week-table/week-table.component';

const NewProgram = () => {
    const
        {
            calories, meals, activeDay, client,
            setActiveDay, setSelectedCity, handleAddProgram, dispatch
        } = useProgram();

    return (
        <div className='newProgram'>
            <h2 className='titleInNewProgram'>
                new program
            </h2>
            <form onSubmit={handleAddProgram}>
                <div className='personInfoAndStat'>
                    <AddPersonInfo setSelectedCity={setSelectedCity} />
                    <Statistics number_of_meals={meals} total_calories={calories} />
                </div>
                <div className='weekInfo'>
                    <WeekTable
                        setActiveDay={setActiveDay}
                        activeDay={activeDay}
                        client={client}
                        dispatch={dispatch}
                    />
                </div>
            </form>
        </div>
    );
};

export default NewProgram;