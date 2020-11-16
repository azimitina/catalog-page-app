const initialState = {
  app: { womensClothing: [], error: null, fetching: false, sortBy: 'popularity' },
  search: {
    loading: false,
    results: [],
    value: "",
  },
};

export default initialState;
