import { createSlice } from "@reduxjs/toolkit";

const menuToggle = createSlice({
  name: "sidebarToggle",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuToggle.actions;
export default menuToggle.reducer;
