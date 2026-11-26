import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, ThunkExtraArg } from './index';
import { setAuthorizationStatus, setUserEmail } from './action';
import type { AuthInfo } from '../store/types';
import axios from 'axios';

const TOKEN_KEY = 'six-cities-token';

export const checkAuth = createAsyncThunk<
  void,
  void,
  { state: RootState; extra: ThunkExtraArg }
>('user/checkAuth', async (_arg, { extra, dispatch }) => {
  try {
    const { data } = await extra.get<AuthInfo>('/login');
    dispatch(setAuthorizationStatus('AUTH'));
    dispatch(setUserEmail(data.email));
  } catch {
    dispatch(setAuthorizationStatus('NO_AUTH'));
    dispatch(setUserEmail(null));
  }
});

export const login = createAsyncThunk<
  AuthInfo,
  { email: string; password: string },
  { state: RootState; extra: ThunkExtraArg }
>('user/login', async ({ email, password }, { extra, dispatch, rejectWithValue }) => {
  try {
    const { data } = await extra.post<AuthInfo>('/login', { email, password });
    localStorage.setItem(TOKEN_KEY, data.token);
    dispatch(setAuthorizationStatus('AUTH'));
    dispatch(setUserEmail(data.email));
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      const message = error.response?.data?.message ?? 'Login failed';
      return rejectWithValue(message);
    }
    return rejectWithValue('Login failed');
  }
});

export const logout = createAsyncThunk<
  void,
  void,
  { state: RootState; extra: ThunkExtraArg }
>('user/logout', async (_arg, { extra, dispatch }) => {
  try {
    await extra.delete('/logout');
  } finally {
    localStorage.removeItem(TOKEN_KEY);
    dispatch(setAuthorizationStatus('NO_AUTH'));
    dispatch(setUserEmail(null));
  }
});
