import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import ExpensesForm from '../../components/ExpensesForm';
import expenses from '../fixture/expenses';


test('should render ExpensesForm correctly with empty info', () =>{
    const wrapper = shallow(<ExpensesForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesForm with some data', () =>{
    const wrapper = shallow(<ExpensesForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render the error for invaild form submission', () =>{
    const wrapper = shallow( <ExpensesForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
});
test('should set description on inpust changes', () => {
    const value = 'new description';
    const wrapper = shallow( <ExpensesForm />);
    wrapper.find('input').at(0).simulate('change', { 
        target: {value }
    });
    expect(wrapper.state('description')).toBe(value);
});
test('should set note on texterea changes', () => {
    const value = 'important note';
    const wrapper = shallow( <ExpensesForm /> );
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('notes')).toBe(value);
});
test('should set amount if vaild input', () =>{
    const value = '23.50';
    const wrapper = shallow( <ExpensesForm /> );
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});
test('should not set amount if invaild input', () =>{
    const value = '12.1222';
    const wrapper = shallow( <ExpensesForm /> );
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});
test('should call onSubmit prop for valid form submission', () =>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow( <ExpensesForm expense={expenses[0]} onSubmit={onSubmitSpy}/> );
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        description: expenses[0].description,
        notes: undefined,
    });
});
test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('date')).toEqual(now);
});
test('should set calender focus on change', () => {
    const wrapper = shallow(<ExpensesForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused: true});
    expect(wrapper.state('focused')).toEqual(true)
})