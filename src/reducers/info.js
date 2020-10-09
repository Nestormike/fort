import {SET_CURRENT_COMPANY, SET_CURRENT_GROUP, SET_CURRENT_OBJECT} from "../constants/constants";

const initialState = {
    detalization: {}
}

export function detalizationObjectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_COMPANY:
            return {...state, detalization: action.payload}
        case SET_CURRENT_GROUP:
            return {...state, detalization: action.payload}
        case SET_CURRENT_OBJECT:
            return {...state, detalization: action.payload}
        default:
            return state
    }
}