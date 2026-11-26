// src/store/offer-thunk.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, ThunkExtraArg } from './index';
import {
  setOffer,
  setNearbyOffers,
  setComments,
  setOfferLoading,
  setCommentSending,
  addComment,
} from './action';
import type { Offer, OfferDetails, Review } from './types';

type OfferData = {
  offer: OfferDetails;
  nearby: Offer[];
  comments: Review[];
};

export const fetchOfferData = createAsyncThunk<
  OfferData,
  string,
  { state: RootState; extra: ThunkExtraArg; rejectValue: 'NOT_FOUND' | 'ERROR' }
>('offer/fetchData', async (offerId, { extra, dispatch, rejectWithValue }) => {
  dispatch(setOfferLoading(true));
  dispatch(setOffer(null));
  dispatch(setNearbyOffers([]));
  dispatch(setComments([]));

  try {
    const [offerRes, nearbyRes, commentsRes] = await Promise.all([
      extra.get<OfferDetails>(`/offers/${offerId}`),
      extra.get<Offer[]>(`/offers/${offerId}/nearby`),
      extra.get<Review[]>(`/comments/${offerId}`),
    ]);

    const comments = [...commentsRes.data].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    dispatch(setOffer(offerRes.data));
    dispatch(setNearbyOffers(nearbyRes.data));
    dispatch(setComments(comments));

    return { offer: offerRes.data, nearby: nearbyRes.data, comments };
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return rejectWithValue('NOT_FOUND');
    }
    return rejectWithValue('ERROR');
  } finally {
    dispatch(setOfferLoading(false));
  }
});

export const postComment = createAsyncThunk<
  Review,
  { offerId: string; comment: string; rating: number },
  { state: RootState; extra: ThunkExtraArg; rejectValue: string }
>('offer/postComment', async ({ offerId, comment, rating }, { extra, dispatch, rejectWithValue }) => {
  dispatch(setCommentSending(true));
  try {
    const { data } = await extra.post<Review>(`/comments/${offerId}`, {
      comment,
      rating,
    });
    dispatch(addComment(data));
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError<{ message?: string }>(error)) {
      return rejectWithValue(error.response?.data?.message ?? 'Failed to send comment');
    }
    return rejectWithValue('Failed to send comment');
  } finally {
    dispatch(setCommentSending(false));
  }
});
