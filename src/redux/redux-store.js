import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import userReducer from "./users-reducer";
import authReducer from './auth-reducer';
import loginReducer from './login-reducer';
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({profilePage: profileReducer, messagesPage: messagesReducer, friendsPage: userReducer, auth: authReducer, loginForm: loginReducer});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;