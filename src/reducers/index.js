import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import wishlist from "./wishlist";
import search from "./search";

const rootReducer = combineReducers({ loginReducer, search, wishlist });

export default rootReducer;
