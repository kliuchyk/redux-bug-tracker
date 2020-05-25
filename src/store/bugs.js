import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    addBug: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      })
    },
    removeBug: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },
    resolveBug: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    }
  }
});

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);

// export const getUnresolvedBugs = state => (
//   state.entities.bugs.filter(bug => !bug.resolved)
// );

export const { addBug, removeBug, resolveBug } = slice.actions;
export default slice.reducer;

// whithout slice - reducers

// export const addBug = createAction('ADD_BUG');
// export const removeBug = createAction('REMOVE_BUG');
// export const resolveBug = createAction('RESOLVE_BUG');

// export default createReducer([], {
//   [addBug.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false
//     })
//   },

//   [removeBug.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs.splice(index, 1);
//   },

//   [resolveBug.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   }
// });