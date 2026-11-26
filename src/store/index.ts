import { configureStore, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createAPI } from '../api';
import { AxiosInstance } from 'axios';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArg = AxiosInstance;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArg,
  AnyAction
>;
