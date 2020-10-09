import {EXPAND_COMPANY, SET_COMPANIES, SET_CURRENT_COMPANY} from "../constants/constants";

export function SetCompanies(companies) {
    return {
        type: SET_COMPANIES,
        companies: companies
    }
}

export function ExpandCompany(company) {
    return {
        type: EXPAND_COMPANY,
        company: company
    }
}

export function setCurrentCompany(company) {
    return {
        type: SET_CURRENT_COMPANY,
        payload: company
    }
}