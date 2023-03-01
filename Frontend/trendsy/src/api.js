import axios from "axios";
// import {
//   getProductsFailureAction,
//   getProductsRequestAction,
//   setAllProductsData,
//   setCurruntRoute,
// } from "./redux/ProductsReducer/action";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;
// console.log(baseUrl);

const token = JSON.parse(localStorage.getItem("trendsyToken"))

  const headers= {
    Authorization: token,
    "Content-Type": "application/json",
  };


export const getData = (path, filter) => async (dispatch) => {
  console.log(filter);
  
  try {
    if(path=="/data/search"){
    let res = await axios.get(`${baseUrl}${path}`, {
      headers,
      params:filter
    });
    let data= await res.data
   
    return data
  }else if (path=="/cart"){ 

    // console.log(  `${baseUrl}${path}`)
    let res = await axios.get(`${baseUrl}${path}`, {
      headers,
    });
    let data= await res.data
   console.log(data)
   return data

  }
  } catch (err) {
    console.log(err.message);
  }
};


export const postData = (path, data) => async (dispatch) => {
  // console.log(filter)

  try {
    //dispatch(getProductsRequestAction());

    if (typeof data === "object") {
      let res = await axios.post(`${baseUrl}${path}`, data);
      return await res.data;
    }
  } catch (err) {
    console.log(err.message);
    //dispatch(getProductsFailureAction());
  }
};
