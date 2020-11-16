import {
  CLEAN_QUERY,
  START_SEARCH,
  FINISH_SEARCH,
  UPDATE_SELECTION,
} from "../actions/types";
import initialState from "./initialState";

const searchReducer = (state = initialState.search, action) => {
  switch (action.type) {
    case CLEAN_QUERY:
      return initialState.search;
    case START_SEARCH:
      return { ...state, loading: true, value: action.query };
    case FINISH_SEARCH:
      return { ...state, loading: false, results: action.results };
    case UPDATE_SELECTION:
      return { ...state, value: action.selection };

    default:
      return state;
  }
};

export default searchReducer;
