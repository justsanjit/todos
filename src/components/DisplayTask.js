import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import NotFound from './NotFound';

const DisplayTask = ({task, onEdit}) => {
    // If No task found
    if (!task) {
        return <NotFound />
    }

    return (
        <div className="wrapper">
            <div className="main">
                <div className="level">
                    <Link to="/" className="level-item button back">Back</Link>
                    <button className="level-item button edit" onClick={onEdit}>Edit</button>
                </div>
                <div className="view-task">
                    <p><strong>{task.nickname.data.name}</strong></p>
                    <p>{task.name}</p>
                    <p>created at {task.creationTime}</p>
                </div>
            </div>
      </div>
    );
}

const mapStateToProps = (state, {taskId}) => {
    return {
        task: state.tasks.find(task => task.id === taskId) || null
    }
} 

export default connect(mapStateToProps)(DisplayTask);