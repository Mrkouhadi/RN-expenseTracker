import React, { createContext, useReducer } from "react";
import DUMMY_DATA from '../dummy_data';

export const ExpensesCtx = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, {description, amount, date})=>{},
});

const ExpenseReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            const ID = new Date().valueOf(); 
            return [ {id:ID, ...action.payload} , ...state]
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
    const [expenseState, dispatch] = useReducer(ExpenseReducer, DUMMY_DATA);

    const addExpense = (expensesData) =>{
        dispatch({ type:'ADD', payload:expensesData })
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
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }
    return <ExpensesCtx.Provider value={value}>
                {children}  
           </ExpensesCtx.Provider>
}

export default ExpensesCtxProvider;