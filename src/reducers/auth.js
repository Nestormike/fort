import {SET_AUTH} from "../constants/constants";

const initialState = {
  isAuthorized: +localStorage.getItem("IsAuthorized")
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {...state, isAuthorized: action.auth.isAuthorized};
    default:
      return state;
  }
};

export default auth;