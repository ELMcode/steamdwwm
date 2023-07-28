import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './Reducers';

const rootReducer = combineReducers({
    data: dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;