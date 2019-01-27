import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

// Combine all reducers, in this case we have only one
export default combineReducers({
    tasks: taskReducer
});