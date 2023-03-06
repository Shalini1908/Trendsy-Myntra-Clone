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
  SET_CART_DATA,
} from "./action.type";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  TotalData: [],

  isAuth: false,
  name: JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.name||"",
  CartTotals: {
    total: 0,
    discount: 0,
    coupen: 0,
    social: 0,
    fee: 0,
    loginDic:0,
    total_Amount: 0,
  },
  cartData:[],
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
      return { ...state, isAuth: true ,name:payload};
    }

    case LogoutSuccess: {
      return { ...state, isAuth: false , cartData:[]};
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
        cartData: [...state.cartData, payload],
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
     
      return {
        ...state,

        CartTotals: payload,
      };
    }
    case SET_CART_DATA: {
     
      return {
        ...state,

        cartData: payload,
      };
    }
    
    default: {
      return state;
    }
  }
};
