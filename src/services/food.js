/**
 * To get the food items from the db
 * @param {String} userId
 * @param {Boolean} sorted
 */
const getAllFoods = (userId, sorted) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/food?userId=${userId}${sorted?'&sorted=true':''}`, {
        method: "GET",
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

export default {
    getAllFoods,
};
