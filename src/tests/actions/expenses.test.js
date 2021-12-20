import { addExpenses, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updateds: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    notes: 'This was last months rent'
  };
  const action = addExpenses(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpenses();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      id: expect.any(String),
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0
    }
  });
});
