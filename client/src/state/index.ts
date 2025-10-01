
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: GlobalState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
   
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode, toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;