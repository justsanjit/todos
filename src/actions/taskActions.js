import {CREATE_TASK, TOGGLE_TASK, DELETE_TASK, EDIT_TASK} from './type';


export const createTask = (nickname) => ({
    type: CREATE_TASK,
    payload: {
        nickname: nickname
    }
});


export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
});


export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
});


export const editTask = (taskId, data) => ({
    type: EDIT_TASK,
    payload: {
        id: taskId,
        name: data.name,
        nickname: data.nickname,
        creationTime : data.creationTime
    }
});


