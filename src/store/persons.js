import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
  name: 'persons',
  initialState: {
    byId: {},
    allIds: [],
  },
  reducers: {
    addPerson: (persons, action) => {
      const newId = ++lastId;
      persons.byId[newId] = {
        id: newId,
        name: action.payload.name,
        bugs: [],
      };
      persons.allIds.push(newId);
    },
    assignBug: (persons, action) => {
      const bugId = action.payload.bugId;
      const userId = action.payload.personId;

      persons.byId[userId].bugs.push(bugId);
    },
    // removeBug: (bugs, action) => {
    //   const index = bugs.findIndex(bug => bug.id === action.payload.id);
    //   bugs.splice(index, 1);
    // },
    // resolveBug: (bugs, action) => {
    //   const index = bugs.findIndex(bug => bug.id === action.payload.id);
    //   bugs[index].resolved = true;
    // }
  },
});

export const bugsSelector = state => console.log(state);
export const personSelector = state => state.entities.persons;

export const getUserById = (state, id) => state.entities.persons.byId[id];

export const selectUserBugs = createSelector(
  bugsSelector,
  getUserById,
  (bugs, user) => bugs.map(bug => user.bugs.find(bug.id))
);

export const { assignBug, addPerson } = slice.actions;
export default slice.reducer;
