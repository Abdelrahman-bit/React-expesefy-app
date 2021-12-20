import React from 'react';
import { DateRangePicker } from 'react-dates';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null

    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusedChange = (calendarFocused) => {
        this.setState({calendarFocused});
    }
    render() {
        return(
            <div> 
            <input tyep='text' value= {this.props.text}  onChange={(e) =>{
                this.props.dispatch(setTextFilter(e.target.value));
            }}/>

            <select value={this.props.sortBy} onChange={(e) =>{e.target.value === "date"? this.props.dispatch(sortByDate()): this.props.dispatch(sortByAmount())}}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>

            <DateRangePicker 
                startDate={this.props.startDate}
                startDateId="start date unique id"
                endDate={this.props.endDate}
                endDateId='end date unique id'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusedChange}
                numberOfMonths={1}
                isOutsideRange={() => {false}}
                showClearDates={true}
            />
            </div>
        )

    }
}



const mapStateToProps = (state) => {
    return{
        ...state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);