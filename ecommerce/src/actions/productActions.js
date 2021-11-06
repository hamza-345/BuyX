import {
  LIST_PRODUCTS_FAIL,
  LIST_PRODUCTS_REQUEST,
  LIST_PRODUCTS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
} from "../constants/productConstants";

import exportedObj from "../serverData";

export const listProductsAction = () => async (dispatch) => {
  dispatch({ type: LIST_PRODUCTS_REQUEST });
  exportedObj
    .getAll()
    .then((data) => {
      dispatch({ type: LIST_PRODUCTS_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispatch({
        type: LIST_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    });
};

export const listProductsDetails = (id) => async (dispatch) => {
    dispatch({ type: PRODUCTS_DETAILS_REQUEST });
    exportedObj
      .getProduct(id)
      .then((data) => {
        dispatch({ type: PRODUCTS_DETAILS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: PRODUCTS_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.response,
        });
      });
  };
