import expenses from '../fixture/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove the expense if the id not match', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});
test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expenses: {
            description: 'rent',
            amount: '2323',
            createdAt: 22323
        }
    }
    
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expenses])
});
test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updateds: {
            amount: 22222
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {...expenses[1], amount: 22222}, expenses[2]]);
});
test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updateds: {
            amount: 22222
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});



