import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    addProject: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
      })
    },
    deleteProject: (projects, action) => {
      const index = projects.findIndex(project => project.id === action.payload.id);
      projects.splice(index, 1);
    },
    // resolveBug: (bugs, action) => {
    //   const index = bugs.findIndex(bug => bug.id === action.payload.id);
    //   bugs[index].resolved = true;
    // }
  }
});

export const { addProject, deleteProject } = slice.actions;
export default slice.reducer;