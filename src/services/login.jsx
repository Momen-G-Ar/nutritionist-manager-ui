/**
 * To check if the user name and password is correct 
 * @param {String} userName 
 * @param {String} password 
*/
const handleLogin = (username, password) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

/**
 * To save the user in the session storage
 * @param {{
 *  userName:String;
 *  password:String;
 * }} user 
 */
const setSessionStorage = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

export { handleLogin, setSessionStorage };