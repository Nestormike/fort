import {EXPAND_COMPANY, SET_COMPANIES} from "../constants/constants";

const initialState = {
    companies: [],
    currentCompany: null
}

export function companiesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMPANIES:
            return {...state, companies: action.companies};
        case EXPAND_COMPANY:
            action.company.isExpanded = !action.company.isExpanded;
            return {...state, companies: [...state.companies]};
        default:
            return state
    }
}