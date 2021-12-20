import { v4 as uuidv4 } from 'uuid';


export const addExpenses = ({description='', notes='', amount=0, createdAt=0} = {}) => ({
    type: 'ADD_EXPENSE',
    expenses:{
        id: uuidv4(),
        description,
        notes,
        amount,
        createdAt
    }
});

export const editExpense = (id, updateds) => ({
    type: 'EDIT_EXPENSE',
    id,
    updateds

})

export const removeExpense = ({ id } = {}) =>{  
    return{
        type: 'REMOVE_EXPENSE', 
        id
    }
}