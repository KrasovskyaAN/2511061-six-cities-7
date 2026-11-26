import { createAction } from '@reduxjs/toolkit';
import type { Offer, AuthorizationStatus, Review, OfferDetails } from '../store/types';

export const changeCity = createAction<string>('city/change');
export const fillOffers = createAction<Offer[]>('offers/fill');
export const setOffersLoading = createAction<boolean>('offers/setLoading');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUserEmail = createAction<string | null>('user/setUserEmail');

export const setOffer = createAction<OfferDetails | null>('offer/setOffer');
export const setNearbyOffers = createAction<Offer[]>('offer/setNearbyOffers');
export const setComments = createAction<Review[]>('offer/setComments');
export const setOfferLoading = createAction<boolean>('offer/setLoading');
export const setCommentSending = createAction<boolean>('offer/setCommentSending');
export const addComment = createAction<Review>('offer/addComment');
