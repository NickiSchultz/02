import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    messPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;