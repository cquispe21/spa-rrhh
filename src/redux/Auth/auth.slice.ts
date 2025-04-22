// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
  name: '',
  email: '',
  role: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return action.payload;
    },
    logout: () => {
      return {
        name: '',
        email: '',
        role: '',
        isLoggedIn: false,
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
