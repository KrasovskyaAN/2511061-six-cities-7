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
  {
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
    id: '1153ca1f-08e7-470e-94f8-9d9c5903abf3',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 420,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
  },
  {
    id: '7321aa5d-c040-4b01-85f4-f9b5ddcc7957',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 760,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5,
  },
  {
    id: '3b0cbdd0-dc5b-40bc-8964-52fac5151a82',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 199,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
  },
  {
    id: '85b171c3-d910-4e63-b9ef-b5d72f131c94',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 336,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
  },
  {
    id: '33d971d7-1984-47a6-a410-6cb940a5d383',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 117,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4,
  },
  {
    id: 'bf319b5a-817a-4652-8855-f1f06bd72a81',
    title: 'The house among olive',
    type: 'room',
    price: 207,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.867557,
      longitude: 4.371696999999999,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
  },
  {
    id: 'e5d88784-d1fa-4465-b79d-173829b2834a',
    title: 'The Joshua Tree House',
    type: 'room',
    price: 246,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.6,
  },
  {
    id: 'beea7dd1-b3d6-4927-adfa-09420269df1c',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 430,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
  },
  {
    id: '0ae9bd4a-ae06-4f5f-a917-96622132a528',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment',
    price: 418,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.6,
  },
  {
    id: '1b752dbc-a619-4d12-865e-591e2cb2afeb',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 458,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.538341,
      longitude: 9.976654000000002,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1,
  },
  {
    id: '174a4f8f-84f5-4cc6-9661-bb481d30b9d3',
    title: 'House in countryside',
    type: 'hotel',
    price: 159,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.2,
  },
  {
    id: '1b3a21ef-9ecb-4c9d-a0a3-f6ad3f27bb98',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 778,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    location: {
      latitude: 53.529341,
      longitude: 9.975654,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1,
  },
  {
    id: '2e70869b-5c78-498d-a8ad-145d2cf5a24d',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 110,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4,
  },
  {
    id: '2742ddc5-b7e9-4587-85a1-151b8cd557dd',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 238,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
  },
  {
    id: '958ffcb5-686d-4e26-aa58-19bb1868580a',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 471,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.211402,
      longitude: 6.756314000000001,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.3,
  },
  {
    id: '70d5227b-cbbb-4f0a-8913-353611849982',
    title: 'House in countryside',
    type: 'house',
    price: 564,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    location: {
      latitude: 51.228402,
      longitude: 6.784314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
  },
  {
    id: '61468464-3008-4d4c-b487-5421f7d014de',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 197,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1,
  },
  {
    id: '21b3a1af-6aa3-4e60-9000-d75f45556c66',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 128,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.932361,
      longitude: 6.937974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.5,
  },
  {
    id: '983fe58b-c8ba-4bb3-8c20-e0a1c8168b6e',
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 290,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.8,
  },
];
