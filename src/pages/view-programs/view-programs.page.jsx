import './view-programs.css';

import React, { useContext } from 'react';

import Input from './../../components/common/input/input';
import { UserContext } from './../../components/providers/user-provider.component';
import emptyList from '../../asserts/empty-box-100.png';
import { useSearchParams } from 'react-router-dom';
import useParams from '../../hooks/params.hook';

const ViewPrograms = () => {

    const userContext = useContext(UserContext);
    const { myParams, setParam } = useParams();

    /**
    * Handler function for the form onSubmit event.
    * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleSearchChange = (e) => {
        setParam('search', e.target.value);
    };


    return (
        <div className='viewPrograms'>
            <h2 className='titleInViewPrograms'>
                View Programs
            </h2>
            <div className='search'>
                <Input
                    type={'search'}
                    label='search'
                    defaultValue={''}
                    onChange={e => handleSearchChange(e)}
                />
            </div>
            <div className='clientsInViewPrograms'>
                {

                }
                <div className='empty'>
                    <img src={emptyList} alt='empty list' />
                    <span>No Clients</span>
                </div>
            </div>
        </div>
    );
};

export default ViewPrograms;