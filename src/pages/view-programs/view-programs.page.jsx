import './view-programs.css';

import React from 'react';

import useViewPrograms from '../../hooks/view-programs/use-view-programs';

import Input from './../../components/common/input/input';
import emptyList from '../../assets/empty-box-100.png';
import ProgramCard from './../../components/view-programs/program-card/program-card.component';


const ViewPrograms = () => {
    const { clientTable, myParams, handleDeleteClient, handleSearchChange } = useViewPrograms();

    return (
        <div className='viewPrograms'>
            <h2 className='titleInViewPrograms'>
                View Programs
            </h2>
            <div className='search'>
                <Input
                    type={'search'}
                    label='search'
                    defaultValue={myParams.search}
                    onChange={e => handleSearchChange(e)}
                />
            </div>
            <div className={`clientsInViewPrograms ${clientTable.length === 0 ? 'empty' : ''}`}>
                {
                    (clientTable.length > 0)
                        ? clientTable.map((client, i) => <ProgramCard key={i + ' ' + client} handleDeleteClient={handleDeleteClient} client={client} />)
                        : <div className='empty'>
                            <img src={emptyList} alt='empty list' />
                            <span>No Clients</span>
                        </div>
                }
            </div>
        </div>
    );
};

export default ViewPrograms;