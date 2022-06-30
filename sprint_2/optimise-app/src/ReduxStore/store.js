
import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import {  reducerFirst } from "./firstStore/reducer.first";

const rootReducer = combineReducers({
    books:reducerFirst
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))