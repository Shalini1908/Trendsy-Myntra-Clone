import axios from "axios";
// import {
//   getProductsFailureAction,
//   getProductsRequestAction,
//   setAllProductsData,
//   setCurruntRoute,
// } from "./redux/ProductsReducer/action";

// const baseUrl = process.env.REACT_APP_JSON_SERVER_URL;
// console.log(baseUrl);
const baseUrl=""

export const getData = (path, filter) => async (dispatch) => {
  // console.log(filter)
let data={ title:["madhukar"],category:[filter],brand:[]}
  try {
   // dispatch(getProductsRequestAction());

    // if (typeof filter === "object") {
    //   let res = await axios.get(`${baseUrl}${path}`, { params: { ...filter } });
    //   //console.log(res);
    //   console.log(baseUrl);
    //  // dispatch(setCurruntRoute(path.replace("/", "")));
    //   return await res.data;
    // } else {
    //   let res = await axios.get(`${baseUrl}${path}`);
    //   let data = await res.data;

    //   const route = path.replace("/", "");
     // dispatch(setAllProductsData(data, route));
      return data;
    //}
  } catch (err) {
    //console.log(err.message);
   // dispatch(getProductsFailureAction());
  }
};

export const postData = (path, data) => async (dispatch) => {
  // console.log(filter)

  try {
    //dispatch(getProductsRequestAction());

    if (typeof data === "object") {
      let res = await axios.post(`${baseUrl}${path}`, data)
      return await res.data;
   
  }
 } catch (err) {
    console.log(err.message);
   //dispatch(getProductsFailureAction());
  }
};