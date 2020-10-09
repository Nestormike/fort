import {EXPAND_GROUP, SET_CURRENT_GROUP, SET_GROUPS} from "../constants/constants";

export function SetGroups(groups) {
    return {
        type: SET_GROUPS,
        groups: groups
    }
}

export function ExpandGroup(group) {
    return {
        type: EXPAND_GROUP,
        group: group
    }
}

export function setCurrentGroup(group) {
    return {
        type: SET_CURRENT_GROUP,
        payload: group
    }
}