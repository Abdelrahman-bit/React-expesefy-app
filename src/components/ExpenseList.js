import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selsectExpense from '../selectors/visibleExpenses'

export const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? ( <p>there is no expenses</p> ) : (props.expenses.map((expense) =>{
            return <ExpenseListItem  {...expense} key={expense.id}/>;
        }))}
    </div>
);

const mapStateToProps = (state) =>{
    return{
        expenses: selsectExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
