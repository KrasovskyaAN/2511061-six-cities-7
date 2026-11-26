export type AuthorizationStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export type AuthInfo = {
  token: string;
  email: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type State = {
  city: string;
  offers: Offer[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  offer: OfferDetails | null;
  nearbyOffers: Offer[];
  comments: Review[];
  isOfferLoading: boolean;
  isCommentSending: boolean;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferDetails = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type Review = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};
