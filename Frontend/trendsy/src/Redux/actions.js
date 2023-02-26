import axios from "axios";
import { LoginSuccess } from "./action.type";

import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_SUCCESS,
 
} from "./action.type";

export const getProductsData = (page) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let responce = await axios(``);
    console.log(responce.data);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: responce.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

export const getSingleData = (id) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    let responce = await axios(``);
    console.log(responce.data);
    dispatch({ type: GET_SINGLE_SUCCESS, payload: responce.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};


export const LoginFunctionSuccess = (payload)=>{
  return{
      type: LoginSuccess , payload
  }
}
