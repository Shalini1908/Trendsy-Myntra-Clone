import axios from "axios";
// import {
//   getProductsFailureAction,
//   getProductsRequestAction,
//   setAllProductsData,
//   setCurruntRoute,
// } from "./redux/ProductsReducer/action";

const baseUrl = process.env.REACT_APP_TRENDZY_BASE_URL;
// console.log(baseUrl);

const token=localStorage.getItem("trendsyToken");
export const getData = (path, filter) => async (dispatch) => {
   console.log(filter)

  try {
   

   
      let res = await axios.get(`${baseUrl}${path}`, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
      console.log(res);
      console.log(baseUrl);
     
    
  } catch (err) {
    console.log(err.message);
  
  }
};
// const data=`[
//   {
//     "ID": "tt0398974",
//     "name": "Dr. Shaitan",
//     "Year": "1960",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt1702558",
//     "name": "Nadir Khan",
//     "Year": "1968",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "urdu"
//   },
//   {
//     "ID": "tt0493437",
//     "name": "Apna Sapna Money Money",
//     "Year": "2006",
//     "Timing(min)": "134 min",
//     "Rating(10)": "5.3",
//     "Votes": "1,892",
//     "Genre": "Comedy, Musical, Romance            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt0273405",
//     "name": "Aag Aur Sholay",
//     "Year": "1987",
//     "Timing(min)": "-",
//     "Rating(10)": "2.2",
//     "Votes": "20",
//     "Genre": "-",
//     "Language": "urdu"
//   },
//   {
//     "ID": "tt0049595",
//     "name": "Parivar",
//     "Year": "1956",
//     "Timing(min)": "-",
//     "Rating(10)": "7.4",
//     "Votes": "21",
//     "Genre": "Comedy, Drama, Family            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt2930026",
//     "name": "Humraah: The Traitor",
//     "Year": "2008",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Thriller            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt6597160",
//     "name": "Jacqueline I Am Coming",
//     "Year": "2019",
//     "Timing(min)": "112 min",
//     "Rating(10)": "7.9",
//     "Votes": "16",
//     "Genre": "Drama            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt0829459",
//     "name": "A Mighty Heart",
//     "Year": "2007",
//     "Timing(min)": "108 min",
//     "Rating(10)": "6.6",
//     "Votes": "26,885",
//     "Genre": "Biography, Drama, History            ",
//     "Language": "urdu"
//   },
//   {
//     "ID": "tt0154875",
//     "name": "Midnight Mail",
//     "Year": "1939",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Action            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt0364628",
//     "name": "Raktalekha",
//     "Year": "1992",
//     "Timing(min)": "175 min",
//     "Rating(10)": "6.3",
//     "Votes": "12",
//     "Genre": "Drama            ",
//     "Language": "bengali"
//   },
//   {
//     "ID": "tt0364733",
//     "name": "Veedevadandi Babu",
//     "Year": "1997",
//     "Timing(min)": "138 min",
//     "Rating(10)": "5.6",
//     "Votes": "218",
//     "Genre": "Comedy            ",
//     "Language": "telugu"
//   },
//   {
//     "ID": "tt8272296",
//     "name": "A Mayalu Timi Lai",
//     "Year": "2018 Video",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Short, Music            ",
//     "Language": "nepali"
//   },
//   {
//     "ID": "tt5684550",
//     "name": "Da Tang Xuan Zang",
//     "Year": "2016",
//     "Timing(min)": "90 min",
//     "Rating(10)": "6.2",
//     "Votes": "379",
//     "Genre": "Biography, History            ",
//     "Language": "sanskrit"
//   },
//   {
//     "ID": "tt0250733",
//     "name": "Sikandar",
//     "Year": "1976",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt1407272",
//     "name": "Pehla Qadam",
//     "Year": "1958",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "urdu"
//   },
//   {
//     "ID": "tt0318983",
//     "name": "Amman Koil Kizhakkaalae",
//     "Year": "1986",
//     "Timing(min)": "141 min",
//     "Rating(10)": "6.9",
//     "Votes": "63",
//     "Genre": "Drama            ",
//     "Language": "tamil"
//   },
//   {
//     "ID": "tt3148392",
//     "name": "Shatru",
//     "Year": "2013",
//     "Timing(min)": "-",
//     "Rating(10)": "4.5",
//     "Votes": "11",
//     "Genre": "Action, Thriller            ",
//     "Language": "kannada"
//   },
//   {
//     "ID": "tt7836398",
//     "name": "Kamal Khatri Feat. Simpal Kharel: Jaula Relaima",
//     "Year": "2017 Video",
//     "Timing(min)": "5 min",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Short, Music            ",
//     "Language": "nepali"
//   },
//   {
//     "ID": "tt0376353",
//     "name": "Zinda Jala Doonga",
//     "Year": "1988",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Action            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt2302945",
//     "name": "Tukaram",
//     "Year": "2012",
//     "Timing(min)": "156 min",
//     "Rating(10)": "7.3",
//     "Votes": "231",
//     "Genre": "Biography, Drama, History            ",
//     "Language": "marathi"
//   },
//   {
//     "ID": "tt6517874",
//     "name": "Ramante Edenthottam",
//     "Year": "2017",
//     "Timing(min)": "122 min",
//     "Rating(10)": "6",
//     "Votes": "459",
//     "Genre": "Comedy, Drama, Romance            ",
//     "Language": "malayalam"
//   },
//   {
//     "ID": "tt0150519",
//     "name": "Faslah",
//     "Year": "1974",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Crime, Drama, Romance            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt4820566",
//     "name": "Jawani Ki Ghabrahat",
//     "Year": "1991",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Thriller            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt0318296",
//     "name": "Anbu Chinnam",
//     "Year": "1990",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "tamil"
//   },
//   {
//     "ID": "tt12717866",
//     "name": "Naveed",
//     "Year": "2020",
//     "Timing(min)": "57 min",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Documentary            ",
//     "Language": "urdu"
//   },
//   {
//     "ID": "tt12701012",
//     "name": "Ramudu Bheemudu",
//     "Year": "1988",
//     "Timing(min)": "141 min",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Drama            ",
//     "Language": "telugu"
//   },
//   {
//     "ID": "tt3466016",
//     "name": "Vaade Kavali",
//     "Year": "2009",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Romance            ",
//     "Language": "telugu"
//   },
//   {
//     "ID": "tt4654666",
//     "name": "Aakhri Muqabla",
//     "Year": "1978",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "Action            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt1319563",
//     "name": "Dracula",
//     "Year": "1999",
//     "Timing(min)": "92 min",
//     "Rating(10)": "4.1",
//     "Votes": "16",
//     "Genre": "Horror            ",
//     "Language": "hindi"
//   },
//   {
//     "ID": "tt0398130",
//     "name": "Jahanara",
//     "Year": "1935",
//     "Timing(min)": "-",
//     "Rating(10)": "-",
//     "Votes": "-",
//     "Genre": "-",
//     "Language": "hindi"
//   }
//  ]`
// export const getData=(route,filter)=>{
//   const getdata=JSON.parse(data)
//    return getdata
// }

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