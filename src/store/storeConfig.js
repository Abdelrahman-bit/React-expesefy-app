import {createStore, combineReducers} from 'redux';
import expensiseReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


// the store -----------------------------------
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensiseReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}