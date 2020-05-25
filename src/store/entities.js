import { combineReducers } from 'redux';

import projectReducer from './projects';
import bugReducer from './bugs';
import personReducer from './persons';

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  persons: personReducer,
});