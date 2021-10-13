import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/home/homeSlice';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: loginReducer,
  },
});
