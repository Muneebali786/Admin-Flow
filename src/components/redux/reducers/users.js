import { SET_USERS, SET_EDIT_MODE, DELETE_USER, PUT_USER } from "../actions";

const initialState = {
	users: [],
};
const users = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return { ...state, users: action.value };
		case SET_EDIT_MODE: {
			console.log(action);
			const users = (state || []).map((x) => {
				if (x.id === action.value.userId) {
					x.editMode = action.value.editMode;
				}
				return { ...x };
			});
			console.log(users);
			return [...users];
		}
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.value),
			};
		case PUT_USER:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.value.id) {
						const val = {
							...user,
							// ...action.value,
							name: "Waleed Farooqi",
							id: action.value.id,
							phone: action.value.phone,
							email: action.value.email,
						};
						return val;
					} else return user;
				}),
			};
		default:
			return state;
	}
};
// const initialState = {
// 	users: [],
// };
// export default users;
// const users = (state = [], action) => {
// 	switch (action.type) {
// 		case SET_USERS:
// 			return { ...state, users: action.value };
// 		case SET_EDIT_MODE: {
// 			console.log(action);
// 			const users = (state || []).map((x) => {
// 				if (x.id === action.value.userId) {
// 					x.editMode = action.value.editMode;
// 				}
// 				return { ...x };
// 			});
// 			console.log(users);
// 			return [...users];
// 		}
// 		//Delete case

// 		case DELETE_USER: {
// 			const newState = state.users.filter(
// 				(val) => val !== action.value.user.id
// 				// (userId) => users.id !== action.value.userId
// 			); // Use filter method to remoreove the item that has been deleted from the list
// 			return newState;
// 		}

// 		default:
// 			return state;
// 	}
// };

export default users;
