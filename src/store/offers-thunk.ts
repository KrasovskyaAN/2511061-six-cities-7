import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, ThunkExtraArg } from './index';
import { fillOffers, setOffersLoading } from './action';
import type { Offer } from '../store/types';

export const fetchOffers = createAsyncThunk<
  Offer[],
  void,
  { state: RootState; extra: ThunkExtraArg }
>('offers/fetch', async (_arg, { extra, dispatch }) => {
  dispatch(setOffersLoading(true));
  try {
    const { data } = await extra.get<Offer[]>('/offers');
    dispatch(fillOffers(data));
    return data;
  } finally {
    dispatch(setOffersLoading(false));
  }
});
