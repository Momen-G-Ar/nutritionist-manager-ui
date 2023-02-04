/**
 * To check if the user name and password is correct 
 * @param {String} userName 
 * @param {String} password 
*/
const handleLogin = (userName, password) => {
    const USERS = JSON.parse(localStorage.getItem('users'));
    return USERS.find((user) =>
        String(user.userName).toLowerCase().trim() === userName.toLowerCase().trim()
        && String(user.password).toLowerCase().trim() === password.toLowerCase().trim())
        || null;
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