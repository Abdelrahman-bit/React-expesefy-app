import moment from 'moment';
import filtersReducer from '../../reducers/filters'

test('should setup default filter value', () =>{
    const state = filtersReducer(undefined, { type: '@@init' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () =>{
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () =>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount',
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () =>{
    const action = { 
        type: 'SET_TEXT',
        text: 'this is a text!'
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('this is a text!')
});

test('should set startDate filter', () => {
    const startDate = moment().startOf('month');
    const action = {
        type: 'SET_END_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
});

test('should set endDate filter', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_START_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
});

