/**
 * To check if the user name and password is correct 
 * @param {String} user_name 
 * @param {String} password 
*/
const handleLogin = (user_name, password) => {
    const USERS = JSON.parse(localStorage.getItem('users'));
    return USERS.find((user) =>
        String(user.user_name).toLowerCase().trim() === user_name.toLowerCase().trim()
        && String(user.password).toLowerCase().trim() === password.toLowerCase().trim())
        || null;
};

/**
 * To save the user in the session storage
 * @param {{
 *  user_name:String;
 *  password:String;
 * }} user 
 */
const setSessionStorage = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

export { handleLogin, setSessionStorage };