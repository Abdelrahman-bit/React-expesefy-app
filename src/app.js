import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/storeConfig'
import {addExpenses, editExpense, removeExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/visibleExpenses'
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();
// console.log(store.getState());

// store.dispatch(addExpenses({description:'water bill', amount: 2323}))
// store.dispatch(addExpenses({description:'Gas bill', amount: 230}))
// store.dispatch(addExpenses({description:'Rent', amount: 78518}))


const state = store.getState();

// const visiblety = getVisibleExpenses(state.expenses, state.filters)
// console.log(visiblety)
// console.log(store.getState());
// store.dispatch(getVisibleExpenses());
const root = document.querySelector('#root');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render( jsx , root);