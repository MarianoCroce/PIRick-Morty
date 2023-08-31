import {ADD_FAV, REMOVE_FAV, SORT, FILTER, RESET} from "./action-types"


export const addFav = (character) => {

    return {
        type: ADD_FAV,
        payload: character,
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
}

export const filterByGender = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }
}

export const sortById = (order) => {
    return {
        type: SORT,
        payload: order,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}