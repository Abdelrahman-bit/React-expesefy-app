import React from 'react';
import { Link } from 'react-router-dom'


const ExpenseListItem = ({ description, amount, createdAt, id }) =>(
    <div>
        <h3> description: <Link to={`/edit/${id}`}> {description} </Link></h3>
        <p> amount:  {amount} </p>
        <p> created at: {createdAt} </p>
    </div>
);

export default ExpenseListItem;