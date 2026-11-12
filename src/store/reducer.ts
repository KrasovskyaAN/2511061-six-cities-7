import { createReducer } from '@reduxjs/toolkit';
import type { State } from './types';
import { changeCity, fillOffers } from './action';

const initialState: State = {
  city: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
