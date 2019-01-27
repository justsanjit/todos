import {CREATE_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK} from '../actions/type';
import {formatDate} from '../helpers';

const initialState = [];

export default function(state = initialState, action) {

    switch (action.type) {
        
        case CREATE_TASK:
            // Because IDs are in string, to create next ID we have to 
            // Find the max Id then convert it into int to add 1 
            // then turn it back to string
            const nextId = (parseInt(state.reduce((last, current) =>  {
                return (last.id >= current.id) ? last.id : current.id;
            }, "0")) + 1).toString();
            const newTask = {
                id: nextId,
                name: action.payload.name || '',
                creationTime: formatDate(new Date()),
                completed: false,
                nickname: {
                    data: {
                        name: action.payload.nickname || ''
                    }
                }
            };
            return [...state, newTask];


        case EDIT_TASK: 
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return Object.assign({}, task, {
                        name: action.payload.name,
                        creationtime: action.payload.creationTime,
                        nickname: Object.assign({}, task.nickname, {
                            data: Object.assign({}, task.nickname.data, {
                                name: action.payload.nickname
                            })
                        })
                    })
                }
                return task;
            });
        
                
        case TOGGLE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return Object.assign({}, task, {
                        completed: !task.completed
                    })
                }
                return task;
            });


        case DELETE_TASK:
            const indexToDelete = state.findIndex(task => task.id === action.payload.id);
            const newState =  [
                ...state.slice(0, indexToDelete),
                ...state.slice(indexToDelete + 1)
            ];
            return newState;
        

        default:
            return state;
    }
}