import type { Offer } from '../mocks/offers';
import { SortType, SortTypeValue } from '../const';

export function sortOffers(offers: Offer[], sortType: SortTypeValue): Offer[] {
  switch (sortType) {
    case SortType.PriceLowToHigh:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortType.PriceHighToLow:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortType.TopRatedFirst:
      return [...offers].sort((a, b) => b.rating - a.rating);
    case SortType.Popular:
    default:
      return offers;
  }
}
