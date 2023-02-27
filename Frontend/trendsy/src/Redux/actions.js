import axios from "axios";

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

export const productsGetRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

export const productsGetSuccessAction = (data) => {
  return { type: GET_PRODUCTS_SUCCESS, payload: data };
};

export const productsGetErrorAction = () => {
  return { type: GET_PRODUCTS_ERROR };
};

export const totalProductsGetRequestAction = () => {
  return { type: GET_TOTAL_PRODUCTS_REQUEST };
};

export const totalProductsGetSuccessAction = (data) => {
  return { type: GET_TOTAL_PRODUCTS_SUCCESS, payload: data };
};

export const totalProductsGetErrorAction = () => {
  return { type: GET_TOTAL_PRODUCTS_ERROR };
};

export const addToCartPostRequestAction = () => {
  return { type: POST_ADDTOCART_REQUEST };
};

export const addToCartPostSuccessAction = (data) => {
  return { type: POST_ADDTOCART_SUCCESS, payload: data };
};

export const addToCartPostErrorAction = () => {
  return { type: POST_ADDTOCART_ERROR };
};

export const LoginFunctionSuccess = (payload) => {
 if(payload.name)
  return {
    type: LoginSuccess,
    payload:payload.name,
  };
  else{
    return {
      type: LoginSuccess,
      payload:"",
    };
  }
};

export const LogoutFunctionSuccess = () => {
  return {
    type: LogoutSuccess,
  };
};

export const getProducts = (Q) => (dispatch) => {
  dispatch(totalProductsGetRequestAction());
  axios
    .get(`${process.env.REACT_APP_TRENDZY_BASE_URL}/data?ideal=${Q}&limit=200`)
    .then((res) => {
      dispatch(totalProductsGetSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(totalProductsGetErrorAction());
      console.log(err.message);
    });
};

export const setCartTotalS = (payload) => {
  console.log(payload);
  return {
    type: SET_CART_TOTALS,
    payload,
  };
};

// export const AddToCart = (_id) => (dispatch) => {
//   dispatch(totalProductsGetRequestAction());

//   axios
//     .post(`${process.env.REACT_APP_TRENDZY_BASE_URL}/cart/addtocart`, data)
//     .then((res) => {
//       dispatch(addToCartPostSuccessAction(res.data));
//     })
//     .catch((err) => {
//       dispatch(addToCartPostErrorAction());
//       console.log(err.message);
//     });
// };

// export const getFilterProducts =
//   (ideal) => (params) => (filterData) => (dispatch) => {
//     const brandCollection = filterData(params?.brands, "brand");
//     const categoryCollection = filterData(params?.category, "category");
//     const colorsCollection = filterData(params?.colors, "colors");
//     const sizeCollection = filterData(params?.size, "size");
//     // console.log(sizeCollection);

//     dispatch(productsGetRequestAction());
//     axios
//       .get(
//         `${process.env.REACT_APP_TRENDZY_ALL_DATA_URL}?ideal=${ideal}&${brandCollection}${categoryCollection}${colorsCollection}${sizeCollection}`
//       )
//       .then((res) => {
//         // dispatch(productsGetSuccessAction(res.data));
//         console.log(res);
//       })
//       .catch((err) => {
//         dispatch(productsGetErrorAction());
//         console.log(err.message);
//       });
//   };
