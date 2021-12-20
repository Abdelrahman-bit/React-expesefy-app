import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize'

export default class ExpensesForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            description: props.expense? props.expense.description : '',
            notes: props.expense? props.expense.notes : '',
            amount: props.expense? (props.expense.amount).toString()  : '',
            date: props.expense? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNotesChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({notes}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ // ^\d*(\.\d{0,2})?$ is a regular expertion that allow just the numbers and with just one "." and two number after it
            this.setState(() => ({amount}))
        }
    }
    onDateChange = (date) => {
        if(date){
            this.setState(({date}))
        }
    }
    onFocusChange = ({focused}) => {
        this.setState(({focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide a description and amount'}));
        }else{
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.date.valueOf(),
                notes: this.state.notes
            })
        }
    }

    render(){
        return(
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.description} onChange={this.onDescriptionChange} type="text" placeholder="description" autoFocus />
                    <input value={this.state.amount} onChange={this.onAmountChange} type="text" placeholder="amount" />
                    <SingleDatePicker 
                        date={this.state.date} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.focused} 
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea onChange={this.onNotesChange} type="text" value={this.state.notes} placeholder="type a note (optional)"></textarea>
                    <button type="submit"> Add Expense </button>
                </form>
            </div>
        )
    }
}