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
        let usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < usersFromLocalStorage.length; i++) {
            if (usersFromLocalStorage[i].user_name === user.user_name) {
                usersFromLocalStorage[i] = user;
            }
        }
        console.log(usersFromLocalStorage);
        localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));

        setUser(null);
        sessionStorage.removeItem('user');
    };

    const editUser = (newUser) => {
        setUser(newUser);
        sessionStorage.setItem('user', JSON.stringify(newUser));
    };

    return (
        <UserContext.Provider value={{ user, setUser, deleteUser, editUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;