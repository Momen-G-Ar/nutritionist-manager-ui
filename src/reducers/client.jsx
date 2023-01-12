/**
 * Reducer function updates the state of the client's days
 * @param {{
 *  ind:Number;
 *  type:String;
 *  day:String;
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
        return finalClient;
    }

    switch (action.day) {

        case 'saturday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.saturday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.saturday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.saturday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'sunday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.sunday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.sunday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.sunday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'monday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.monday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.monday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.monday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'tuesday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.tuesday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.tuesday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.tuesday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'wednesday': {

            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.wednesday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.wednesday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.wednesday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'thursday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.thursday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.thursday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.thursday = newDay;
                    return newClient;
                }
                default:
                    return client;
            }
        }


        case 'friday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    let newClient = { ...client };
                    newClient.days.friday.push(action.food);
                    return newClient;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.friday.filter((food, i) => i !== action.ind);
                    let newClient = { ...client };
                    newClient.days.friday = newDay;
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