import { combineReducers } from 'redux';
import auth from './auth';
import {companiesReducer} from "./companies";
import {groupReducer} from "./groups";
import {objectReducer} from "./objects";
import {detalizationObjectReducer} from "./info";

export const rootReducer = combineReducers({
  auth,
  companies: companiesReducer,
  groups: groupReducer,
  objects: objectReducer,
  detalizationObject: detalizationObjectReducer
});