import {createStore} from 'redux';
import rootReducer from './reducers';

// Inital state for store
const initialState = {
    tasks: [
        {
            id: "1",
            name: "Appointment with Mrs. Jane Doe regarding new credit line.",
            creationTime: "2019-01-23",
            completed: false,
            nickname: {
                data:{
                    name: "Go to bank"
                }
            }
        },
        {
            id: "2",
            name: "The founder and CEO of Onnit, the mega lifestyle brand and one of the fastest growing companies in the country, teaches us how one single day of positive cho.",
            creationTime: "2019-01-24",
            completed: true,
            nickname: {
                data: {
                    name: "Read Own the Day, Own your Life"
                }
            }
        }

    ]
}

// Create a store
const store = createStore(rootReducer, initialState);

store.subscribe(() => {console.log(store.getState());})

export default store;