import axios from "axios";
// import {
//   getProductsFailureAction,
//   getProductsRequestAction,
//   setAllProductsData,
//   setCurruntRoute,
// } from "./redux/ProductsReducer/action";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;
// console.log(baseUrl);

const token = JSON.parse(localStorage.getItem("trendsyToken") || "{}")?.token;

const headers = {
  Authorization: token,
  "Content-Type": "application/json",
};

export const getData = async (path, filter) => {
  console.log(filter);
  const serverRequestData = { ...filter, headers };
  try {
    // if (path == "/data/search") {
    let res = await axios.get(`${baseUrl}${path}`, serverRequestData);
    let data = await res.data;
    //console.log(res)
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const postData = async (path, filter) => {
 
  const serverRequestData = { ...filter, headers };
  console.log(serverRequestData,filter)
  try {
   

 
      let res = await axios.post(`${baseUrl}${path}`, serverRequestData);
      return await res.data;
    
  } catch (err) {
    console.log(err.message);
   
  }
};

export const updateData = async (path, filter) => {
 
  const serverRequestData = { ...filter, headers };
  console.log(serverRequestData,filter)
  try {
   

 
      let res = await axios.patch(`${baseUrl}${path}`, serverRequestData);
      return await res.data;
    
  } catch (err) {
    console.log(err.message);
   
  }
};

export const deleteData = async (path, filter) => {
   console.log(path,filter)
  const serverRequestData = { ...filter, headers };
  try {
 

   
      let res = await axios.delete(`${baseUrl}${path}`, serverRequestData);
      return await res.data;
    
  } catch (err) {
    console.log(err.message);
   
  }
};
