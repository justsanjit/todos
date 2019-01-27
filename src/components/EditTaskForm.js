import React from 'react';
import {connect} from 'react-redux';
import {editTask} from '../actions/taskActions';
import {Link} from 'react-router-dom';

class EditTaskForm extends React.Component {
    
    constructor (props) {
        super(props);
        const {task} = props;
        this.state = {
            nickname: task.nickname.data.name,
            name: task.name,
            creationTime: task.creationTime,
            error: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitUpdate(this.props.taskId, {
            name: this.state.name,
            nickname: this.state.nickname,
            creationTime: this.state.creationTime
        });
        this.props.onSave();
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="level">
                            <Link to="/" className="level-item button back">Back</Link>
                            <input
                                type="submit"
                                className="level-item button edit"
                                value="Save" />
                        </div>
                        <div className="view-task">
                            <label>Nickname</label>
                            <input type="text" name="nickname" value={this.state.nickname} onChange={this.onChange}/>
                            <label>Name</label>
                            <textarea name="name" value={this.state.name} onChange={this.onChange}></textarea>
                            <label>Created At</label>
                            <input type="date" name="creationTime" value={this.state.creationTime} onChange={this.onChange}/>
                        </div>
                    </form>
                </div>
        </div>
        );
    }
}

const mapStateToProps = (state, {taskId}) => {
    return {
        task: state.tasks.find(task => task.id === taskId) || {}
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        submitUpdate: (id, data) => dispatch(editTask(id, data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTaskForm);