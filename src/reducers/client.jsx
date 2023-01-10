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
 * }
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

    switch (action.day) {

        case 'saturday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.saturday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.saturday.filter((food, i) => i !== action.ind);
                    client.days.saturday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'sunday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.sunday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.sunday.filter((food, i) => i !== action.ind);
                    client.days.sunday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'monday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.monday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.monday.filter((food, i) => i !== action.ind);
                    client.days.monday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'tuesday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.tuesday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.tuesday.filter((food, i) => i !== action.ind);
                    client.days.tuesday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'wednesday': {

            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.wednesday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.wednesday.filter((food, i) => i !== action.ind);
                    client.days.wednesday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'thursday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.thursday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.thursday.filter((food, i) => i !== action.ind);
                    client.days.thursday = newDay;
                    return client;
                }
                default:
                    return client;
            }
        }


        case 'friday': {
            switch (action.type) {
                case 'ADD_FOOD': {
                    client.days.friday.push(action.food);
                    return client;
                }
                case 'DELETE_FOOD': {
                    const newDay = client.days.friday.filter((food, i) => i !== action.ind);
                    client.days.friday = newDay;
                    return client;
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