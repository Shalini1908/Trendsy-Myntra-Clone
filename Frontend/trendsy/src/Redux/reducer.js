import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_SUCCESS,
} from "./action.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
  singleData: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleData: payload,
      };
    }
    default: {
      return state;
    }
  }
};
