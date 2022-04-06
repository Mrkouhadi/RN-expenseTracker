import { createContext } from "react";

const ExpensesCtx = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:({id})=>{},
    updateExpense:({description, amount, date})=>{},
});

const ExpensesProvider = ({children}) =>{

    const value={

    }
    return <ExpensesCtx.Provider value={value}>
                {children}  
           </ExpensesCtx.Provider>
}

export default ExpensesProvider;