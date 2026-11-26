import { createReducer } from '@reduxjs/toolkit';
import type { State } from './types';
import { changeCity, fillOffers, setOffersLoading, setAuthorizationStatus, setUserEmail, setNearbyOffers, setOffer, setComments, setOfferLoading, setCommentSending, addComment } from './action';

const initialState: State = {
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
  authorizationStatus: 'UNKNOWN',
  userEmail: null,
  offer: null,
  nearbyOffers: [],
  comments: [],
  isOfferLoading: false,
  isCommentSending: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferLoading, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(setCommentSending, (state, action) => {
      state.isCommentSending = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [action.payload, ...state.comments];
    });
});
