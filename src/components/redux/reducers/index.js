import users from "./users";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	usersData: users,
});

export default rootReducer;
