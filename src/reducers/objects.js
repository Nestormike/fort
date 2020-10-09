import { SET_OBJECT} from "../constants/constants";

const initialState = {
    objects: [],
    currentObject: null
}

export function objectReducer(state = initialState, action) {
    switch (action.type) {
        case SET_OBJECT:
            return {...state, objects: action.objects}
        default:
            return state
    }
}