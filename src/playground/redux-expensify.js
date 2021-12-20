import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';

const addExpenses = ({description='', notes='', amount=0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses:{
        id: uuidv4(),
        description,
        notes,
        amount,
        createdAt
    }
});

const editExpense = (id, updateds) => ({
    type: 'EDIT_EXPENSE',
    id,
    updateds

})

const removeExpense = ({ id } = {}) =>{  
    return{
        type: 'REMOVE_EXPENSE', 
        id
    }
}

const expensiseReducerDefaultState = [];
const expensiseReducer = (state= expensiseReducerDefaultState, action) => {
    switch (action.type) {
        case('ADD_EXPENSE'):
            return [...state, action.expenses]
        case('REMOVE_EXPENSE'):
            return state.filter( (item) => item.id != action.id )
        case('EDIT_EXPENSE'):
            return state.map( (item) => {
                if(item.id == action.id){
                    return {
                        ...item,
                        ...action.updateds
                    }
                }else{
                    return item.description
                }
            } )
        default:
            return state;
    }
}

// ---------------------------------------------------------- filters

const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const setTextFilter = (newText) => ({
    type: 'SET_TEXT',
    text: newText
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

const filtersReducer = (state= filtersReducerDefault, action) =>{
    switch (action.type) {
        case('SET_TEXT'):
            return{
                ...state,
                text: action.text
            }
        case('SORT_BY_AMOUNT'):
            return{
                ...state, 
                sortBy: 'amount'
            }
        case('SORT_BY_DATE'):
            return{
                ...state, 
                sortBy: 'date'
            }
        case('SET_START_DATE'):
            return{
                ...state, 
                startDate: action.date
            }
        case('SET_END_DATE'):
            return{
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
}

const getVisibleExpencese = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((item) => {
        const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
        const textMatch = text === '' || item.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}


// the store -----------------------------------
const store = createStore(
    combineReducers({
        expenses: expensiseReducer,
        filters: filtersReducer
    })
)
    
    
store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpencese(state.expenses, state.filters);
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpenses({description:'rent', amount:100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpenses({description:'coffe', amount:200, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expenses.id}));
// store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}))

// store.dispatch(setTextFilter('rent'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(134))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

// const demoState = {
//     expensive: [{
//         id: '3t3ddo93-po',
//         description: "Adam rent",
//         note: 'this was the final rent for this adderes',
//         amount: 54500 ,// in bennies
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', //date or amount of
//         startDate: undefined, 
//         endDate: undefined
//     }
// }

