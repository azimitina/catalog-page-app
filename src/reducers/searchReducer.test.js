import searchReducer from "./searchReducer";

import {
  CLEAN_QUERY,
  START_SEARCH,
  FINISH_SEARCH,
  UPDATE_SELECTION,
} from "../actions/types";
import initialState from "./initialState";

describe("searchReducer", () => {
  const initState = initialState.search;

  const query = "Nike";
  const selection = "Nike";
  const results = [
    {
      name: "Nike leggings",
      meta: "Sport leggings",
      price: "$120",
      final_price: "$120",
      image: "http://example.com/fancy.png",
    },
  ];

  it("returns initial state", () => {
    const result = searchReducer(undefined, {});
    expect(result).toEqual(initState);
  });

  it("handles CLEAN_QUERY action", () => {
    const state = {
      ...initState,
    };
    const action = {
      type: CLEAN_QUERY,
    };

    const result = searchReducer(state, action);
    expect(result).toEqual({
      ...initState,
    });
  });

  it("handles START_SEARCH action", () => {
    const state = {
      ...initState,
    };
    const action = {
      type: START_SEARCH,
      query,
    };
    const result = searchReducer(state, action);
    expect(result).toEqual({
      ...initState,
      loading: true,
      value: query,
    });
  });

  it("handles FINISH_SEARCH action", () => {
    const state = {
      ...initState,
    };
    const action = {
      type: FINISH_SEARCH,
      results,
    };
    const result = searchReducer(state, action);
    expect(result).toEqual({
      ...initState,
      loading: false,
      results,
    });
  });

  it("handles UPDATE_SELECTION action", () => {
    const state = {
      ...initState,
    };
    const action = {
      type: UPDATE_SELECTION,
      selection,
    };
    const result = searchReducer(state, action);
    expect(result).toEqual({
      ...initState,
      loading: false,
      value: selection,
    });
  });
});
