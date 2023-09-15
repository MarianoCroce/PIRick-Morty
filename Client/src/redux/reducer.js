import { ADD_FAV, FILTER, REMOVE_FAV, SORT, RESET } from "./action-types";

const initialState = { allCharacters: [], myFavorites: [] };

const rootReducer = (state = initialState, action) => {
  let sorted;
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    //CASO VIEJO
    // case ADD_FAV:
    //     return {
    //         ...state,
    //         myFavorites: [...state.myFavorites, action.payload],
    //         allCharacters: [...state.myFavorites, action.payload],
    //     }

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };

    //MODO VIEJO
    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (character) => character.id !== action.payload
    //     ), //antes habia usado Number
    //   };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case SORT:
      if (action.payload === "Ascendente") {
        sorted = state.myFavorites.sort((a, b) => (a.id < b.id ? 1 : -1));
      } else {
        sorted = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: [...sorted],
      };

    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };

    default:
      return state;
  }
};

export default rootReducer;
