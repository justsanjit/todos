import React from 'react';
import DisplayTask from './DisplayTask';
import EditTaskForm from './EditTaskForm';

export default class EditableTask extends React.Component {
    
    state = {
        isFormOpen: false
    }   

    toggleEdit = () => {
        this.setState({isFormOpen: !this.state.isFormOpen});
    }

    render() {
        const taskId = this.props.match.params.taskId;
        return this.state.isFormOpen 
            ? <EditTaskForm taskId={taskId} onSave={this.toggleEdit}/> 
            : <DisplayTask taskId={taskId} onEdit={this.toggleEdit}/>
    }
}