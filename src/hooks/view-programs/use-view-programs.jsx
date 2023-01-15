import { useContext, useEffect, useMemo } from "react";
import { UserContext } from './../../components/providers/user-provider.component';
import useParams from './../params.hook';
import { useNavigate } from 'react-router-dom';
import useProgram from './../new-program/useProgram';

const useViewPrograms = () => {
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



    return {
        clientTable, myParams,
        handleDeleteClient, handleSearchChange,
    };
};

export default useViewPrograms;