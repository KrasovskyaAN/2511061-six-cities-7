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

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false,
    },
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4,
  },
  {
    id: '4a1b6c3e-2f7d-4e8a-9b5c-1d2e3f4a5b6c',
    date: '2019-06-12T09:30:00.000Z',
    user: {
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/2.jpg',
      isPro: true,
    },
    comment:
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    rating: 5,
  },
];
