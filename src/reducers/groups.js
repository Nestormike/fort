import {EXPAND_GROUP, SET_GROUPS} from "../constants/constants";

const initialState = {
    groups: [],
    currentGroup: null
}

export function groupReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GROUPS:
            return {...state, groups: action.groups}
        case EXPAND_GROUP:
            action.group.isExpanded = !action.group.isExpanded;
            return {...state, groups: [...state.groups]};
        default:
            return state
    }
}