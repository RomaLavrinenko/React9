import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from '@redux-devtools/extension';
import todosReducers from "./reducers/todosReducers";
import albumsReducers from './reducers/albumsReducers';
import commentsRedecers from './reducers/commentsRedecers';

const rootReducer = combineReducers({
    todosReducers: todosReducers,
    albumsReducers: albumsReducers,
    commentsRedecers: commentsRedecers,
})

const composeEnhansers = composeWithDevTools({
    trace: true,
    traceLimit: 25
})
const store = createStore(rootReducer, composeEnhansers());;

export default store;