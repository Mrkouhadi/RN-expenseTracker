import { createContext, useReducer } from "react";

export const ExpensesCtx = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, {description, amount, date})=>{},
});

const ExpenseReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            const id = new Date().valueOf(); 
            return [ {...action.payload} , ...state]
        case "UPDATE":

        case "DELETE":
            return [
                state
            ]
        default:
             return state;
    }
}

const ExpensesCtxProvider = ({children}) =>{
    const [expenseState, dispatch] = useReducer(ExpenseReducer);

    const addExpense = (expensesData) =>{
        dispatch({ type:'ADD', payload:expensesData })
    }
    const deleteExpense = (id) =>{
        dispatch({ type:'DELETE', payload:id })
    }
    const updateExpense = (id, expenseData) =>{
        dispatch({type:'UPDATE', payload:{id, data:expenseData}})
    }
    return <ExpensesCtx.Provider >
                {children}  
           </ExpensesCtx.Provider>
}

export default ExpensesCtxProvider;