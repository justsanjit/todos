import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// import store from './store';
// import {toggleTask, addTask} from './actions/taskActions';

// console.log(store.getState());

// const unsubscribe = store.subscribe(() => {console.log(store.getState());});

// store.dispatch(toggleTask("1"));

// store.dispatch(addTask("2", "Go to bank", "Go to bank"));

// unsubscribe();



