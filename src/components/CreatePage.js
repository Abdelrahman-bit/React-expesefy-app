import React from 'react';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import {addExpenses} from '../actions/expenses'
import { useNavigate } from "react-router-dom"

const CreatePage = (props) =>{ 
    const navigate = useNavigate()
    return(
        <div>
            <h1>Creat a new expense</h1>
            <ExpensesForm 
                onSubmit={(expenses) => {
                    props.dispatch(addExpenses(expenses));
                    navigate('/');
                }}
            />
        </div>
    );
}

export default connect()(CreatePage);