import { combineReducers } from "redux";
import counterReducer from "./countReducer";

export const mainReducer = combineReducers({counterXYZ:counterReducer})