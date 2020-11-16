import {
  FETCH_WOMENS_CLOTHING,
  FETCH_WOMENS_CLOTHING_SUCCESS,
  FETCH_WOMENS_CLOTHING_ERROR,
  CHANGE_SORT,
} from "../actions/types";
import initialState from "./initialState";

const appReducer = (state = initialState.app, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return {
        ...state,
        sortBy: action.value,
      };
      
    case FETCH_WOMENS_CLOTHING:
      return {
        ...state,
        error: null,
        fetching: true,
      };

    case FETCH_WOMENS_CLOTHING_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        womensClothing: action.response || [],
      };

    case FETCH_WOMENS_CLOTHING_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.error,
        womensClothing: [],
      };

    default:
      return state;
  }
};
export default appReducer;
