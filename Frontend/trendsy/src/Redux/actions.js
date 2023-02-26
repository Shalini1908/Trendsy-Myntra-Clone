import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_TOTAL_PRODUCTS_ERROR,
  GET_TOTAL_PRODUCTS_REQUEST,
  GET_TOTAL_PRODUCTS_SUCCESS,
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

export const getProducts = (Q) => (dispatch) => {
  dispatch(totalProductsGetRequestAction());
  axios
    .get(`${process.env.REACT_APP_TRENDZY_ALL_DATA_URL}?ideal=${Q}&limit=200`)
    .then((res) => {
      dispatch(totalProductsGetSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(totalProductsGetErrorAction());
      console.log(err.message);
    });
};

// export const AddToCart = (_id) => (dispatch) => {
//   dispatch(totalProductsGetRequestAction());
//   axios
//     .get(`${process.env.REACT_APP_TRENDZY_ALL_DATA_URL}?ideal=${Q}&limit=200`)
//     .then((res) => {
//       dispatch(totalProductsGetSuccessAction(res.data));
//     })
//     .catch((err) => {
//       dispatch(totalProductsGetErrorAction());
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
