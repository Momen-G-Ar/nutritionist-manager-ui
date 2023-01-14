/**
 * Reducer function updates the state of the client's days
 * to use these types in the despatcher you must send parameters as following 
 * To ADD_FOOD: type, food, day
 * To DELETE_FOOD: type, ind, day
 * To SAVE_CLIENT: type, info, id
 * To DELETE_CLIENT: type, id, user
 * 
 * @param {{
 *  type:String;
 *  ind?:Number;
 *  day?:String;
 *  food?:{
 *  id:String;
 *  name:String;
 *  image:String;
 *  amount:Number;
 *  calories:Number;
 * };
 *  id?:String;
 *  info?:{
 *      name:String;
 *      phone:Number;
 *      email:String;
 *      date:String;
 *      city:String; 
 *  };
 * }} action 
 * 
 * @param {{
 *  id:String;
 *  info:{
 *      name:String;
 *      phone:Number;
 *      email:String;
 *      date:String;
 *      city:String; 
 *  };
 *  days:{
 *      saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *      wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *      friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *  };
 * status:{
 *       saturday:{meals:Number; calories:Number;};
 *       sunday:{meals:Number; calories:Number;}; 
 *       monday:{meals:Number; calories:Number;}; 
 *       tuesday:{meals:Number; calories:Number;};
 *       wednesday:{meals:Number; calories:Number;}; 
 *       thursday:{meals:Number; calories:Number;}; 
 *       friday:{meals:Number; calories:Number;};
 *  };
 * }} client 
 */
const reducer = (client, action) => {

    if (action.type === 'SAVE_CLIENT') {
        let finalClient = { ...client };
        finalClient.id = action.id;
        finalClient.info = action.info;

        let clientsInLocalStorage = JSON.parse(localStorage.getItem('clients')) || [];
        clientsInLocalStorage.push(finalClient);
        localStorage.setItem('clients', JSON.stringify(clientsInLocalStorage));

        let initialClient = {
            ...client,
            id: '', info: { name: '', phone: 0, email: '', date: '', city: '' },
        };
        // TODO: Ask khaldon and qusai about it
        initialClient.days.saturday = [];
        initialClient.days.sunday = [];
        initialClient.days.monday = [];
        initialClient.days.tuesday = [];
        initialClient.days.wednesday = [];
        initialClient.days.thursday = [];
        initialClient.days.friday = [];

        initialClient.status.saturday.meals = 0;
        initialClient.status.saturday.calories = 0;
        initialClient.status.sunday.meals = 0;
        initialClient.status.sunday.calories = 0;
        initialClient.status.monday.meals = 0;
        initialClient.status.monday.calories = 0;
        initialClient.status.tuesday.meals = 0;
        initialClient.status.tuesday.calories = 0;
        initialClient.status.wednesday.meals = 0;
        initialClient.status.wednesday.calories = 0;
        initialClient.status.thursday.meals = 0;
        initialClient.status.thursday.calories = 0;
        initialClient.status.friday.meals = 0;
        initialClient.status.friday.calories = 0;

        return initialClient;
    } else if (action.type === 'DELETE_CLIENT') {
        // delete in client in local storage
        let new_clients_in_local_storage = JSON.parse(localStorage.getItem('clients')) || [];
        new_clients_in_local_storage = new_clients_in_local_storage.filter((client) => client.id !== action.id);
        localStorage.setItem('clients', JSON.stringify(new_clients_in_local_storage));

        // delete in users in local storage
        let new_users_in_local_storage = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < new_users_in_local_storage.length; i++) {
            if (new_users_in_local_storage[i].user_name === action.user) {
                new_users_in_local_storage[i].ids.filter((id) => id !== action.id);
            }
        }
        localStorage.setItem('users', JSON.stringify(new_users_in_local_storage));

        // delete in user in session storage
        let new_user_in_session_storage = JSON.parse(sessionStorage.getItem('user'));
        new_user_in_session_storage.ids = new_user_in_session_storage.ids.filter(id => id !== action.id);
        sessionStorage.setItem('user', JSON.stringify(new_user_in_session_storage));

        let initialClient = {
            ...client,
            id: '', info: { name: '', phone: 0, email: '', date: '', city: '' },
        };
        initialClient.days.saturday = [];
        initialClient.days.sunday = [];
        initialClient.days.monday = [];
        initialClient.days.tuesday = [];
        initialClient.days.wednesday = [];
        initialClient.days.thursday = [];
        initialClient.days.friday = [];
        initialClient.status.saturday.meals = 0;
        initialClient.status.saturday.calories = 0;
        initialClient.status.sunday.meals = 0;
        initialClient.status.sunday.calories = 0;
        initialClient.status.monday.meals = 0;
        initialClient.status.monday.calories = 0;
        initialClient.status.tuesday.meals = 0;
        initialClient.status.tuesday.calories = 0;
        initialClient.status.wednesday.meals = 0;
        initialClient.status.wednesday.calories = 0;
        initialClient.status.thursday.meals = 0;
        initialClient.status.thursday.calories = 0;
        initialClient.status.friday.meals = 0;
        initialClient.status.friday.calories = 0;
        return initialClient;
    }

    switch (action.day) {

        case 'saturday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.saturday, action.food];
                    let newClient = { ...client };
                    newClient.days.saturday = newDay;
                    newClient.status.saturday.meals = newClient.days.saturday.length;
                    newClient.status.saturday.calories =
                        newClient.days.saturday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.saturday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.saturday = newDay;
                    newClient.status.saturday.meals = newClient.days.saturday.length;
                    newClient.status.saturday.calories =
                        newClient.days.saturday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'sunday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.sunday, action.food];
                    let newClient = { ...client };
                    newClient.days.sunday = newDay;
                    newClient.status.sunday.meals = newClient.days.sunday.length;
                    newClient.status.sunday.calories =
                        newClient.days.sunday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.sunday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.sunday = newDay;
                    newClient.status.sunday.meals = newClient.days.sunday.length;
                    newClient.status.sunday.calories =
                        newClient.days.sunday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'monday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.monday, action.food];
                    let newClient = { ...client };
                    newClient.days.monday = newDay;
                    newClient.status.monday.meals = newClient.days.monday.length;
                    newClient.status.monday.calories =
                        newClient.days.monday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.monday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.monday = newDay;
                    newClient.status.monday.meals = newClient.days.monday.length;
                    newClient.status.monday.calories =
                        newClient.days.monday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'tuesday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.tuesday, action.food];
                    let newClient = { ...client };
                    newClient.days.tuesday = newDay;
                    newClient.status.tuesday.meals = newClient.days.tuesday.length;
                    newClient.status.tuesday.calories =
                        newClient.days.tuesday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.tuesday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.tuesday = newDay;
                    newClient.status.tuesday.meals = newClient.days.tuesday.length;
                    newClient.status.tuesday.calories =
                        newClient.days.tuesday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'wednesday': {

            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.wednesday, action.food];
                    let newClient = { ...client };
                    newClient.days.wednesday = newDay;
                    newClient.status.wednesday.meals = newClient.days.wednesday.length;
                    newClient.status.wednesday.calories =
                        newClient.days.wednesday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.wednesday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.wednesday = newDay;
                    newClient.status.wednesday.meals = newClient.days.wednesday.length;
                    newClient.status.wednesday.calories =
                        newClient.days.wednesday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'thursday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.thursday, action.food];
                    let newClient = { ...client };
                    newClient.days.thursday = newDay;
                    newClient.status.thursday.meals = newClient.days.thursday.length;
                    newClient.status.thursday.calories =
                        newClient.days.thursday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.thursday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.thursday = newDay;
                    newClient.status.thursday.meals = newClient.days.thursday.length;
                    newClient.status.thursday.calories =
                        newClient.days.thursday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        case 'friday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    const newDay = [...client.days.friday, action.food];
                    let newClient = { ...client };
                    newClient.days.friday = newDay;
                    newClient.status.friday.meals = newClient.days.friday.length;
                    newClient.status.friday.calories =
                        newClient.days.friday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.friday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.friday = newDay;
                    newClient.status.friday.meals = newClient.days.friday.length;
                    newClient.status.friday.calories =
                        newClient.days.friday.reduce((prev, food) =>
                            prev + (food.calories / food.amount), 0).toFixed(2);;
                    return newClient;
                }
                default:
                    return client;
            }
        }

        default:
            return client;
    }
};

export { reducer };