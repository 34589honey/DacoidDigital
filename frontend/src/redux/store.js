import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import linkReducer from './linkSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    links: linkReducer,
  },
});

export default store;
