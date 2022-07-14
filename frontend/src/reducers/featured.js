import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProjects: [],
  currentProjectIndex: null,
};

export const featuredSection = createSlice({
  name: "featuredSection",
  initialState,
  reducers: {},
});
