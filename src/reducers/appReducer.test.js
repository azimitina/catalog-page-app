import appReducer from "./appReducer";
import {
  FETCH_WOMENS_CLOTHING,
  FETCH_WOMENS_CLOTHING_SUCCESS,
  FETCH_WOMENS_CLOTHING_ERROR,
  CHANGE_SORT,
} from "../actions/types";
import initialState from "./initialState";

describe("appReducer", () => {
  const initState = initialState.app;

  const womensClothing = {
    name: "Peppy Co",
    meta: "LED Light",
    price: "$180",
    final_price: "$180",
    image: "http://example.com/fancy.png",
  };

  it("returns initial state", () => {
    const result = appReducer(undefined, {});
    expect(result).toEqual(initState);
  });

  it("handles FETCH_WOMENS_CLOTHING action", () => {
    const result = appReducer(initState, { type: FETCH_WOMENS_CLOTHING });
    expect(result).toEqual({
      ...initState,
      fetching: true,
    });
  });

  it("handles FETCH_WOMENS_CLOTHING_SUCCESS action", () => {
    const state = {
      ...initState,
      error: "There was error",
      fetching: true,
    };
    const action = {
      type: FETCH_WOMENS_CLOTHING_SUCCESS,
      response: [womensClothing],
    };
    const result = appReducer(state, action);
    expect(result).toEqual({
      ...initState,
      error: null,
      fetching: false,
      sortBy: "popularity",
      womensClothing: action.response,
    });
  });

  it("handles FETCH_WOMENS_CLOTHING_ERROR action", () => {
    const state = {
      ...initState,
      fetching: true,
    };
    const action = {
      type: FETCH_WOMENS_CLOTHING_ERROR,
      error: "Network error",
    };
    const result = appReducer(state, action);
    expect(result).toEqual({
      ...initState,
      fetching: false,
      error: "Network error",
      sortBy: "popularity",
      womensClothing: [],
    });
  });

  it("handles CHANGE_SORT action", () => {
    const state = {
      ...initState,
    };

    const action = {
      type: CHANGE_SORT,
      value: "brand_asc",
    };

    const result = appReducer(state, action);
    expect(result).toEqual({
      ...initState,
      fetching: false,
      error: null,
      sortBy: "brand_asc",
      womensClothing: [],
    });
  });
});
