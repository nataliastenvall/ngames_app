import $ from "jquery";
let axios = require("axios");
let cheerio = require("cheerio");
let fs = require("fs");

export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    });
    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      });
    }, 1000);
  };
}

// export function getPhotos(year) {
//   return dispatch => {
//     dispatch(
//       axios.get("https://dev.to/aurelkurtula").then(
//         response => {
//           if (response.status === 200) {
//             const html = response.data;
//             const $ = cheerio.load(html);
//           }
//         },
//         error => console.log(error)
//       )
//     );
//     setTimeout(() => {
//       dispatch({
//         type: GET_PHOTOS_SUCCESS,
//         payload: [1, 2, 3, 4, 5]
//       });
//     }, 1000);
//   };
// }
