import {SET_CURRENT_OBJECT, SET_OBJECT} from "../constants/constants";

export function SetObjects(objects) {
    return {
        type: SET_OBJECT,
        object: objects,
    }
}

export function setCurrentObject(object) {
    return {
        type: SET_CURRENT_OBJECT,
        payload: object
    }
}