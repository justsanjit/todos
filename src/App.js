import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditableTask from './components/EditableTask';
import NotFound from './components/NotFound';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />  
              <Route path="/tasks/:taskId" component={EditableTask} />
              <Route component={NotFound}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
