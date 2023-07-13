/**
 * To get the food items from the db
 * @param {String} userId
 * @param {Boolean} sorted
 */
const getAllFoods = (userId, sorted) => {
    return fetch(
        `${process.env.REACT_APP_SERVER_URL}/food?userId=${userId}${
            sorted ? "&sorted=true" : ""
        }`,
        {
            method: "GET",
        }
    )
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

/**
 * To add food item to the db
 * @param {{
 *  _id: String;
 *  name: String;
 *  image: String;
 *  amount: Number;
 *  calories: Number;
 *  addedBy:string
 * }} food
 */
const AddFood = (food) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/food`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
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
 * To delete food item form the db
 * @param {String} foodId
 * @param {String} userId
 */
const deleteFood = (foodId, userId) => {
    return fetch(
        `${process.env.REACT_APP_SERVER_URL}/food?foodId=${foodId}&userId=${userId}`,
        {
            method: "DELETE",
        }
    )
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

/**
 * To update food item in the db
 * @param {{
 *  _id: String;
 *  name: String;
 *  image: String;
 *  amount: Number;
 *  calories: Number;
 *  addedBy:string
 * }} food
 */
const updateFood = (food) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/food`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(food),
    })
        .then(async (response) => {
            return await response.json();
        })
        .catch((error) => {
            console.error(error);
            return false;
        });
};

// eslint-disable-next-line
export default {
    getAllFoods,
    AddFood,
    deleteFood,
    updateFood,
};
