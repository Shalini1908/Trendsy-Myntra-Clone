import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_TOTAL_PRODUCTS_ERROR,
  GET_TOTAL_PRODUCTS_REQUEST,
  GET_TOTAL_PRODUCTS_SUCCESS,
} from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  TotalData: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
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
        products: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TOTAL_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_TOTAL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        TotalData: payload,
      };
    }
    case GET_TOTAL_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
