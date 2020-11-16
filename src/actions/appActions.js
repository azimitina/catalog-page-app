import {
  FETCH_WOMENS_CLOTHING,
  FETCH_WOMENS_CLOTHING_SUCCESS,
  FETCH_WOMENS_CLOTHING_ERROR,
  CHANGE_SORT,
} from "../actions/types";
import * as womensClothingApi from "../api/womensClothingApi";

export const fetchWomensClothingSuccess = (response) => ({
  type: FETCH_WOMENS_CLOTHING_SUCCESS,
  response,
});

export const fetchWomensClothingFail = (error) => ({
  type: FETCH_WOMENS_CLOTHING_ERROR,
  error,
});

export const fetchWomensClothing = (sortBy) => {
  return (dispatch) => {
    dispatch({ type: FETCH_WOMENS_CLOTHING });

    womensClothingApi
      .getWomensClothing(sortBy)
      .then((response) => {
        dispatch(fetchWomensClothingSuccess(response.data._embedded.product));
      })
      .catch((err) => {
        dispatch(fetchWomensClothingFail(err));
      });
  };
};

export const changeSortBy = (sortBy) => ({
  type: CHANGE_SORT,
  value: sortBy,
});
