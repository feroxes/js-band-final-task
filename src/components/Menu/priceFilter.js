// eslint-disable-next-line import/prefer-default-export
export const priceFilter = [
  {
    name: 'All',
  },
  {
    name: '0 < price < 15',
    from: 0,
    to: 15,
  },
  {
    name: '16 < price < 30',
    from: 16,
    to: 30,
  },
  {
    name: 'price > 31',
    from: 31,
    to: Infinity,
  },
];
