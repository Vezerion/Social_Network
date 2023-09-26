import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import userReducer from "./users-reducer";

let reducers = combineReducers({profilePage: profileReducer, messagesPage: messagesReducer, friendsPage: userReducer});
let store = createStore(reducers);
export default store;