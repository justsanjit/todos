import React from 'react';
import {connect} from 'react-redux';
import { toggleTask, deleteTask} from '../actions/taskActions';
import {Link} from 'react-router-dom';

const Task = ({task, onToggle, onDelete}) => (
    <li className="todo-list-item">
        <input type="checkbox" className="toggle" id={task.id} onChange={() => {onToggle(task.id)}} checked={task.completed}/>
        <label htmlFor={task.id}>{task.nickname.data.name}</label>
        <div className="buttons">
        <Link to={`/tasks/${task.id}`} className="edit-button button">View</Link>
        <button className="delete-button button" href="#" onClick={() => {onDelete(task.id)}}>Delete</button>
        </div>
    </li>
);

const mapDispatchToState = (dispatch) => {
    return {
        onToggle: id => dispatch(toggleTask(id)),
        onDelete: id => dispatch(deleteTask(id))
    }
} 

export default connect(null, mapDispatchToState)(Task);