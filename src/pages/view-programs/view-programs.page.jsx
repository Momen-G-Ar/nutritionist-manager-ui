import './view-programs.css';

import React, { useContext, useEffect, useMemo } from 'react';

import Input from './../../components/common/input/input';
import { UserContext } from './../../components/providers/user-provider.component';
import emptyList from '../../assets/empty-box-100.png';
import useParams from '../../hooks/params.hook';
import ProgramCard from './../../components/view-programs/program-card/program-card.component';
import { useNavigate } from 'react-router-dom';
import useProgram from './../../hooks/new-program/useProgram';


const ViewPrograms = () => {
    const { user, setUser } = useContext(UserContext);
    const { myParams, setParam } = useParams();
    const navigate = useNavigate();
    const { dispatch } = useProgram();
    useEffect(() => {
        if (user === null) {
            navigate('/login', { replace: true });
        }
    }, [user, navigate]);

    /**
     * Handler function for the form onSubmit event.
     * @param {React.FormEvent<HTMLFormElement>} e Event object.
    */
    const handleSearchChange = (e) => {
        setParam('search', e.target.value);
    };


    /**
     * To delete the client from the clients
     * @param {} the_client 
     */
    const handleDeleteClient = (the_client) => {
        dispatch({ type: 'DELETE_CLIENT', id: the_client.id, user: user.user_name });
        let new_user_in_session_storage = { ...user };
        new_user_in_session_storage.ids = new_user_in_session_storage.ids.filter(id => id !== the_client.id);
        setUser(new_user_in_session_storage);
    };

    const clientTable = useMemo(() => {
        const allClients = JSON.parse(localStorage.getItem('clients')) || [];
        let newTable = allClients.filter((client) => {
            if (user.ids.find((id) => client.id === id))
                return client;
            else
                return null;
        });
        newTable = newTable.filter((client) => {
            let match = true;
            if (myParams.search === '')
                return match;
            match &= (client.info.name.toLowerCase().trim().includes(myParams.search.toLowerCase().trim()));
            return match;
        });
        return newTable || [];
    }, [myParams, user]);


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
                        ? clientTable.map((client, i) => <ProgramCard handleDeleteClient={handleDeleteClient} client={client} />)
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