import { createStore } from "redux";


const incrementCount = ({incrementBy = 1} = {} ) =>{
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({type: 'RESET'});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case ('INCREMENT'):
            return {
                count: state.count + action.incrementBy
            };
        case ('DECREMENT'):
            return {
                count: state.count - action.decrementBy
            }
        case ('SET'):
            return {
                count: action.count
            }
        case ('RESET'):
            return {
                count: 0
            }
        default:
            return state;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
})
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 3}));
store.dispatch(resetCount());
store.dispatch((setCount({count: 100})));
unsubscribe() // will not run for this dispatch but its change reflect in the state opject

