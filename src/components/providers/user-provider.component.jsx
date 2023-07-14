import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

/**
 * To pass the user for all of the components
 * @param {{
 *  children:React.ReactNode;
 * }} props 
 * @returns 
 */
const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);

    const deleteUser = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, setUser, deleteUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;