import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) =>(
    <div>
        <h3> description: <Link to={`/edit/${id}`}> {description} </Link></h3>
        <p> amount:  {numeral(amount).format('$0,0.00')} </p>
        <p> created at: {moment(createdAt).format('MMM Do, YYYY')} </p>
    </div>
);

export default ExpenseListItem;