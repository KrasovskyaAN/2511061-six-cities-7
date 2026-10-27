type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
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


export const offers: Offer[] = [
  {
    id: '9af6f711-c28d-7468-82cd-e0b782a27f07',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 8 },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
  },
  {
    id: '2af99e71-bd0b-46a1-9c38-f209c8777386',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 320,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4
  },
  {
    id: '98ccae32-0bd8-4228-88b9-b7f6d6fde8d2',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 153,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.6
  },
  {
    id: '186f7f02-bee7-4d1a-8637-ee1524f808fa',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house',
    price: 925,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7
  },
  /* {
    id: 'd9a6842a-f126-4952-8763-863230d84f19',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 395,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.935974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.3
  },
  {
    id: '358932c4-16c0-440d-b35e-b9522745f8cd',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 194,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.232402,
      longitude: 6.800314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'd2d55889-b101-4ce3-915a-ec75e5031a0d',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 375,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8
  },
  {
    id: 'bcd2645a-2850-47b9-9c5f-2b3110617435',
    title: 'The house among olive ',
    type: 'house',
    price: 194,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.222402,
      longitude: 6.786314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4
  },
  {
    id: '0b56b7f2-2507-4fec-99ea-eabef44b942f',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 203,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5
  },
  {
    id: '34db7dcd-b481-4116-98d7-518ab096f0a5',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 208,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7
  },
  {
    id: '77a4e8a3-f183-4e77-8a0e-ee4a06e7a926',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 494,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
  },
  {
    id: '854fcfab-9daa-493f-876a-68b2b2932fc7',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 277,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.8
  },
  {
    id: '2a605b76-6748-4073-88fe-d8968620ade5',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 429,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.4
  },
  {
    id: 'd2d55889-b101-4ce3-915a-ec75e5031a0d',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 375,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8
  }, */
];
