import React from 'react';
import {connect} from 'react-redux'
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom'
import ExpensesForm from './ExpensesForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditPage = (props) =>{
    const param = useParams();
    const navigate = useNavigate()
    return (
        <div>
            <h1>edit page</h1>
            <p> {param.id} </p>
            <ExpensesForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    navigate('/')
                    console.log('this is expense', expense);
                }}
            />
            <button onClick={() => { 
                props.dispatch(removeExpense({id:param.id}));
                navigate('/')
            }}> Remove </button>
            
        </div>
    );
};

const mapStateToProps = (state) =>{
    const param = window.location.pathname.slice(6);
    // const params = useParams()
    return{        
        expense: state.expenses.find((item) => item.id === param )
    }
}

export default connect(mapStateToProps)(EditPage)
