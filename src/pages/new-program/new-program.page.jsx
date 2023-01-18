import './new-program.css';

import React from 'react';
import useProgram from '../../hooks/new-program/useProgram';

import AddPersonInfo from './../../components/new-program/add-person-info/add-person-info.component';
import Statistics from './../../components/new-program/statistics/statistics.component';
import WeekTable from '../../components/new-program/week-table/week-table.component';
import AddFoodCard from '../../components/new-program/add-food-card/add-food-card';

const NewProgram = () => {
    const {
        activeDay,
        client,
        addCard,
        setActiveDay,
        setSelectedCity,
        handleAddProgram,
        dispatch,
        setAddCard
    } = useProgram();

    return (
        <div className='newProgram'>
            <AddFoodCard
                activeDay={activeDay}
                style={{ display: addCard ? 'flex' : 'none' }}
                dispatch={dispatch}
                setAddCard={setAddCard}
            />
            <h2 className='titleInNewProgram'>
                new program
            </h2>
            <form onSubmit={handleAddProgram}>
                <div className='personInfoAndStat'>
                    <AddPersonInfo setSelectedCity={setSelectedCity} />
                    <Statistics activeDay={activeDay} client={client} />
                </div>
                <div className='weekInfo'>
                    <WeekTable
                        client={client}
                        activeDay={activeDay}
                        setAddCard={setAddCard}
                        setActiveDay={setActiveDay}
                        dispatch={dispatch}
                    />
                </div>
            </form>
        </div>
    );
};

export default NewProgram;