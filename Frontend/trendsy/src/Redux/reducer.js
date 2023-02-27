import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  LoginSuccess,
  LogoutSuccess,
  GET_TOTAL_PRODUCTS_ERROR,
  GET_TOTAL_PRODUCTS_REQUEST,
  GET_TOTAL_PRODUCTS_SUCCESS,
  SET_CART_TOTALS,
  POST_ADDTOCART_REQUEST,
  POST_ADDTOCART_SUCCESS,
  POST_ADDTOCART_ERROR,
} from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  TotalData: [],

  isAuth: false,
  name: "",
  CartTotals: {
    total: 0,
    discount: 0,
    coupen: 0,
    social: 0,
    fee: 0,
    total_Amount: 0,
  },
  isAuth: false,
  name: "",
  cart: [],
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
    case LoginSuccess: {
      return { ...state, isAuth: true };
    }

    case LogoutSuccess: {
      return { ...state, isAuth: false };
    }
    case POST_ADDTOCART_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case POST_ADDTOCART_SUCCESS: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
      };
    }
    case POST_ADDTOCART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case SET_CART_TOTALS: {
      console.log(payload);
      return {
        ...state,

        CartTotals: payload,
      };
    }
    default: {
      return state;
    }
  }
};
