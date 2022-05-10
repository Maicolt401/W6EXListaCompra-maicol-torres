import { createSlice } from "@reduxjs/toolkit";
const projectSlice = createSlice({
  name: "list",
  initialState: [],
  reducer: {
    loadList: (list, action) => [...action.payuload],
  },
});

export const { loadList: loadListActionCreator } = projectSlice.action;
export default projectSlice.reducer;
