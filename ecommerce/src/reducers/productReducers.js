
import {
    LIST_PRODUCTS_FAIL,
    LIST_PRODUCTS_REQUEST,
    LIST_PRODUCTS_SUCCESS,
    PRODUCTS_DETAILS_FAIL,
    PRODUCTS_DETAILS_REQUEST,
    PRODUCTS_DETAILS_SUCCESS,
  } from "../constants/productConstants";

export const ListProducts = (state = { products: [] }, action) => {
  switch (action.type) {
    case LIST_PRODUCTS_REQUEST:
      return { loading: true, products: [] };
    case LIST_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case LIST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const ProductsDetails = (state = { product: {reviews: []} }, action) => {
    switch (action.type) {
      case PRODUCTS_DETAILS_REQUEST:
        return { loading: true, ...state };
      case PRODUCTS_DETAILS_SUCCESS:
        return { loading: false, product: action.payload };
      case PRODUCTS_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  