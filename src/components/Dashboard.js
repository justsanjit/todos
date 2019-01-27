import React, { Component } from 'react';
import CreateTodo from './CreateTodo';
import TaskList from './TaskList';

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          Tasks
        </div>
        <div className="main">
          <CreateTodo />
          <TaskList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
