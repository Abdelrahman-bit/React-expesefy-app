import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const HomePage = () => (
    <div>
        <p>wlecom in the expencive app "Home page"</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default HomePage;
