import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language_type: "ESP",
  language_data: {},
}

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguageType: (state, action) => {
      state.language_type = action.payload;
    },
    setLanguageData: (state, action) => {
      state.language_data = action.payload;
    },
  },
});

export const languageActions = languageSlice.actions;
export const languageSelector = (state) => state.language;
export default languageSlice.reducer;
