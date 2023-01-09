/**
 * Reducer function updates the state of the client 
 * @param {{
 *  type:String;
 *  day:String;
 *  food:{
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
 *      saturday:Array<>; 
 *      sunday:Array<>; 
 *      monday:Array<>; 
 *      tuesday:Array<>;
 *      wednesday:Array<>; 
 *      thursday:Array<>; 
 *      friday:Array<>;     
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
                    const newDay = client.days.saturday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.sunday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.monday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.tuesday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.wednesday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.thursday.filter(item => item.id !== action.food.id);
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
                    const newDay = client.days.friday.filter(item => item.id !== action.food.id);
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