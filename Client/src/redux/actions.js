import { ADD_FAV, REMOVE_FAV, SORT, FILTER, RESET } from "./action-types";

import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

// export const addFav = (character) => {

//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// }

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

//FORMA VIEJA

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// }

export const filterByGender = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const sortById = (order) => {
  return {
    type: SORT,
    payload: order,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
