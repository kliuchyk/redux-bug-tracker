import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addBug, resolveBug, removeBug, getUnresolvedBugs } from './store/bugs';
import { addProject, deleteProject } from './store/projects';
import { addPerson, assignBug } from './store/persons';
import configureStore from './store/configureStore';

import { getUserById, selectUserBugs, bugsSelector } from './store/persons';


const store = configureStore();

store.subscribe(() => console.log(store.getState()))

store.dispatch(addBug({description: "My first bug"}));
store.dispatch(addBug({description: "To be resolved"}));
store.dispatch(addBug({description: "121212"}));
store.dispatch(addBug({description: "3333"}));
store.dispatch(resolveBug({id: 2}));
store.dispatch(removeBug({id: 3}));

store.dispatch(addProject({name: "My first project"}));
store.dispatch(addProject({name: "second project"}));
store.dispatch(deleteProject({id: 1}));

store.dispatch(addPerson({ name: "Kavan Shaban" }));
store.dispatch(addPerson({ name: "Michael Rogovsky" }));
store.dispatch(assignBug({ personId: 1, bugId: 1 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());

const bugsList = bugsSelector(store.getState());
console.log('BUGS: ', unresolvedBugs);


const user = getUserById(store.getState(), 2);
const userBugs = selectUserBugs(bugsList, user);


console.log(user)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
