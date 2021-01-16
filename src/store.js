import { createStore, applyMiddleware, compose } from "redux";
import reduxSaga from "redux-saga";
import rootReducer from "./components/redux/reducers";
import rootSaga from "./components/redux/sagas";

export const getStore = () => {
	const initialState = {};
	const reduxSagaMiddleware = reduxSaga();

	const composeEnhancers =
		typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
			  })
			: compose;

	const enhancer = composeEnhancers(
		applyMiddleware(/*middleware,*/ reduxSagaMiddleware)
	);

	const store = createStore(
		rootReducer,
		initialState,
		enhancer
		// applyMiddleware(reduxSagaMiddleware)
	);

	reduxSagaMiddleware.run(rootSaga);
	return store;
};
