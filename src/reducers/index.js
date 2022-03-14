import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import search from "./search";

const rootReducer = combineReducers({ loginReducer, search });

export default rootReducer;
