import React from 'react';
import { createTask } from '../actions/taskActions';
import {connect} from 'react-redux';

const CreateTodo = ({dispatch}) =>  {
    let input;
    return (
        <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) return;
                dispatch(createTask(input.value));
                input.value = '';
            }}
        >
            <input
                ref={node => input = node}
                type="text"
                className="create-todo"
                placeholder="Write a new task... (Enter to Save)"/>   
        </form>
    );
};

export default connect()(CreateTodo);

