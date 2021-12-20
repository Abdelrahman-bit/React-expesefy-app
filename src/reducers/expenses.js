

const expensiseReducerDefaultState = [];
export default (state= expensiseReducerDefaultState, action) => {
    switch (action.type) {
        case('ADD_EXPENSE'):
            return [...state, action.expenses]
        case('REMOVE_EXPENSE'):
            return state.filter( (item) => item.id != action.id )
        case('EDIT_EXPENSE'):
            return state.map( (item) => {
                if(item.id == action.id){
                    return {
                        ...item,
                        ...action.updateds
                    }
                }else{
                    return item
                }
            } )
        default:
            return state;
    }
}