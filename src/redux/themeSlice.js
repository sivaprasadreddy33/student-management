import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({

  name: "theme",

  initialState: {

    compact: false

  },

  reducers: {

    changeLayout: (state) => {

      state.compact = !state.compact;

    }

  }

});

export const { changeLayout } = themeSlice.actions;

export default themeSlice.reducer;