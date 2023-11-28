import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import { modalSlice } from '@/app/features/modalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
