import axios from "axios";
// import {
//   getProductsFailureAction,
//   getProductsRequestAction,
//   setAllProductsData,
//   setCurruntRoute,
// } from "./redux/ProductsReducer/action";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;
// console.log(baseUrl);

<<<<<<< HEAD
const token = localStorage.getItem("trendsyToken")
=======
>>>>>>> fb1cd2ac2dc33d8fd420c72be9fccb97089de914

const token = JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.token;


const headers = {
  Authorization: token,
  "Content-Type": "application/json",
};

export const getData = async(path, filter) =>  {
  console.log(filter);
const serverRequestData ={...filter,headers}
  try {
    // if (path == "/data/search") {
      let res = await axios.get(`${baseUrl}${path}`,serverRequestData);
      let data = await res.data;
//console.log(res)
      return data;
   
  } catch (err) {
    console.log(err.message);
  }
};

export const postData = async(path, filter) => {
  // console.log(filter)
  const serverRequestData ={...filter,headers}
  try {
    //dispatch(getProductsRequestAction());

    if (typeof data === "object") {
      let res = await axios.post(`${baseUrl}${path}`, serverRequestData );
      return await res.data;
    }
  } catch (err) {
    console.log(err.message);
    //dispatch(getProductsFailureAction());
  }
};



export const deleteData = async(path, filter) =>  {
  // console.log(filter)
  const serverRequestData ={...filter,headers}
  try {
    //dispatch(getProductsRequestAction());

    if (typeof data === "object") {
      let res = await axios.delete(`${baseUrl}${path}`, serverRequestData )
      return await res.data;
    }
  } catch (err) {
    console.log(err.message);
    //dispatch(getProductsFailureAction());
  }
};