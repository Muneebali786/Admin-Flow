import { all } from "redux-saga/effects";
import {
	watchGetUsers,
	watchCancelUserUpdate,
	watchDeleteUser,
	watchEditUser,
	watchPostUser,
	watchPutUser,
} from "./users";

export default function* () {
	yield all([
		watchGetUsers(),
		watchCancelUserUpdate(),
		watchDeleteUser(),
		watchEditUser(),
		watchPostUser(),
		watchPutUser(),
	]);
	console.log("root saga");
}
