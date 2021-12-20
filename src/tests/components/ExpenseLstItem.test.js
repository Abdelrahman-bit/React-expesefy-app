import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixture/expenses';

test('should render the ExpenseListItem', () =>{
    const wapper = shallow( <ExpenseListItem {...expenses[1]} /> );
    expect(wapper).toMatchSnapshot();
})