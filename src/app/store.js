import { applyMiddleware, combineReducers, compose, legacy_createStore,  } from "redux";
import counterReducer from "./features/Counter/reducer";
import thunk from "redux-thunk";


let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSTION_COMPOSE__ || compose;
let store = legacy_createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;