import React from 'react';
import Task from './Task';
import {connect} from 'react-redux';

const TaskList = ({tasks, onToggle}) => {
    return (
        <ul className="todo-list">
            {tasks.map(task => <Task task={task} key={task.id}/>)}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(
    mapStateToProps,
)(TaskList);
