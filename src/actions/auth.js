import {SET_AUTH} from "../constants/constants";

export const SetAuthorized = () => {
  return {
    type: SET_AUTH,
    auth: {
      isAuthorized: 1
    }
  };
}
