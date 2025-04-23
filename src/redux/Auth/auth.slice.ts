// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
  idRol: 0,
  email: '',
  username: '',
  token: '',
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
        idRol: 0,
        email: '',
        username: '',
        token: '',
      };
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
