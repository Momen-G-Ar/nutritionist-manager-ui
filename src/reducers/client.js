import programService from "../services/programs";
/**
 * Reducer function updates the state of the client's days
 * To use these types in the dispatcher you must send parameters as following:
 * ADD_FOOD: type, food, day, amount
 * DELETE_FOOD: type, ind, day
 * SAVE_CLIENT: type, info, userId
 * DELETE_CLIENT: type, _id, user, setUser
 *
 * @param {{
 *  type:String;
 *  amount?:Number;
 *  ind?:Number;
 *  day?:String;
 *  id?:String;
 *  user?:String;
 *  setUser:React.Dispatch<any>;
 *  food?:{
 *   id:String;
 *   name:String;
 *   image:String;
 *   amount:Number;
 *   calories:Number;
 *  };
 *  info?:{
 *      name:String;
 *      phone:Number;
 *      email:String;
 *      date:String;
 *      city:String;
 *  };
 *  userId?;String
 * }} action
 *
 * @param {{
 *  userId?:String;
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
    switch (action.type) {
        case "ADD_FOOD": {
            const newFood = {
                ...action.food,
                amount: action.amount,
                calories: (
                    action.amount *
                    (action.food.calories / action.food.amount)
                ).toFixed(2),
            };
            const newDay = [...client.days[action.day], newFood];
            return {
                ...client,
                days: {
                    ...client.days,
                    [action.day]: newDay,
                },
                status: {
                    ...client.status,
                    [action.day]: {
                        meals: newDay.length,
                        calories: newDay
                            .reduce((prev, food) => prev + Number(food.calories), 0)
                            .toFixed(2),
                    },
                },
            };
        }

        case "DELETE_FOOD": {
            const newDay = client.days[action.day].filter(
                (food, i) => i !== action.ind
            );
            return {
                ...client,
                days: {
                    ...client.days,
                    [action.day]: newDay,
                },
                status: {
                    ...client.status,
                    [action.day]: {
                        meals: newDay.length,
                        calories: newDay
                            .reduce(
                                (prev, food) => prev + Number(food.calories),
                                0
                            )
                            .toFixed(2),
                    },
                },
            };
        }

        case "SAVE_CLIENT": {
            let finalClient = {
                days: { ...client.days },
                client: {
                    ...action.info,
                    birthOfDate: action.info.date,
                },
                addedBy: action.userId,
            };
            const addProgram = programService.addProgram(finalClient);
            addProgram
                .then((res) => {
                    if (res.status === 201) {
                        alert(res.message);
                    } else {
                        alert(res.message);
                        return client;
                    }
                })
                .catch((error) => {
                    console.error(error);
                    return client;
                });
            return {
                info: { name: '', phone: 0, email: '', date: '', city: '' },
                days: {
                    saturday: [],
                    sunday: [],
                    monday: [],
                    tuesday: [],
                    wednesday: [],
                    thursday: [],
                    friday: [],
                },
                status: {
                    saturday: { meals: 0, calories: 0 },
                    sunday: { meals: 0, calories: 0 },
                    monday: { meals: 0, calories: 0 },
                    tuesday: { meals: 0, calories: 0 },
                    wednesday: { meals: 0, calories: 0 },
                    thursday: { meals: 0, calories: 0 },
                    friday: { meals: 0, calories: 0 }
                }
            };
        }

        case "DELETE_CLIENT": {
            // delete in user in session storage
            let newUserInSessionStorage = JSON.parse(
                sessionStorage.getItem("user")
            );
            newUserInSessionStorage.ids = newUserInSessionStorage.ids.filter(
                (id) => id !== action.id
            );
            sessionStorage.setItem(
                "user",
                JSON.stringify(newUserInSessionStorage)
            );

            // delete in client in local storage
            let newClientsInLocalStorage =
                JSON.parse(localStorage.getItem("clients")) || [];
            newClientsInLocalStorage = newClientsInLocalStorage.filter(
                (client) => client.id !== action.id
            );
            localStorage.setItem(
                "clients",
                JSON.stringify(newClientsInLocalStorage)
            );

            // delete in users in local storage
            let newUsersInLocalStorage =
                JSON.parse(localStorage.getItem("users")) || [];
            for (let i = 0; i < newUsersInLocalStorage.length; i++) {
                if (newUsersInLocalStorage[i].userName === action.user) {
                    newUsersInLocalStorage[i].ids = newUsersInLocalStorage[
                        i
                    ].ids.filter((id) => id !== action.id);
                }
            }
            localStorage.setItem(
                "users",
                JSON.stringify(newUsersInLocalStorage)
            );

            return {
                id: "",
                info: { name: "", phone: 0, email: "", date: "", city: "" },
                days: {
                    saturday: [],
                    sunday: [],
                    monday: [],
                    tuesday: [],
                    wednesday: [],
                    thursday: [],
                    friday: [],
                },
                status: {
                    saturday: { meals: 0, calories: 0 },
                    sunday: { meals: 0, calories: 0 },
                    monday: { meals: 0, calories: 0 },
                    tuesday: { meals: 0, calories: 0 },
                    wednesday: { meals: 0, calories: 0 },
                    thursday: { meals: 0, calories: 0 },
                    friday: { meals: 0, calories: 0 },
                },
            };
        }

        default:
            return client;
    }
};

export { reducer };
