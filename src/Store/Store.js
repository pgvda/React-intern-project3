import {createStore, combineReducers} from 'redux';
import todoReducer from './Reducers/TodoReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    // other reducers
});



const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;