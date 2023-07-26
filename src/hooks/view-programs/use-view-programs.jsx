import React, { useContext, useEffect, useMemo } from "react";
import { UserContext } from './../../components/providers/user-provider.component';
import useParams from './../params.hook';
import { useNavigate } from 'react-router-dom';
import useProgram from './../new-program/useProgram';
import programsService from '../../services/programs';

const useViewPrograms = () => {
    const { user } = useContext(UserContext);
    const [clientTable, setClientTable] = React.useState([]);
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
    const handleSearchChange = async(e) => {
        setParam('search', e.target.value);
    };

    /**
     * To delete the client from the clients
     * @param {String} clientId 
     */
    const handleDeleteClient = async (clientId) => {
        dispatch({ type: 'DELETE_CLIENT', _id: clientId });
    };

    useMemo(async () => {
        const allClients = await programsService.getPrograms(myParams.search);
        setClientTable(allClients.value.value || []);
    }, [myParams]);


    return {
        clientTable, myParams,
        handleDeleteClient, handleSearchChange,
    };
};

export default useViewPrograms;