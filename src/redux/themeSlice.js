import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({

  name: "theme",

  initialState: {

    compact: false

  },

  reducers: {

  }

});

export const { changeLayout } = themeSlice.actions;

export default themeSlice.reducer;