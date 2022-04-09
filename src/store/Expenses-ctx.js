import React, { createContext, useReducer } from "react";

export const ExpensesCtx = createContext();

const ExpenseReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            return [ action.payload , ...state]

        case 'SET':
            
            return action.payload.reverse();

        case "UPDATE":
            const updateableExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
            const updateableExpense = state[updateableExpenseIndex];
            const updateItem = { ...updateableExpense , ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updateableExpenseIndex] = updateItem;
            return updatedExpenses;

        case "DELETE":
            return  state.filter(exp => exp.id !== action.payload)
        default:
             return state;
    }
}

const ExpensesCtxProvider = ({children}) =>{
    const [expenseState, dispatch] = useReducer(ExpenseReducer, []);

    const addExpense = (expensesData) =>{
        dispatch({ type:'ADD', payload:expensesData })
    }
    const setExpenses = (expensesData) =>{
        dispatch({type:"SET", payload:expensesData})
    }
    const deleteExpense = (id) =>{
        dispatch({ type:'DELETE', payload:id })
    }
    const updateExpense = (id, expenseData) =>{
        dispatch({type:'UPDATE', payload:{id, data:expenseData}})
    }

    const value={
        expenses:expenseState,
        addExpense:addExpense,
        setExpenses:setExpenses,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense,
    }
    return <ExpensesCtx.Provider value={value}>
                {children}  
           </ExpensesCtx.Provider>
}

export default ExpensesCtxProvider;