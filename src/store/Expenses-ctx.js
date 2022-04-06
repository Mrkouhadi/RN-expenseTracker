import { createContext } from "react";

export const ExpensesCtx = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id, {description, amount, date})=>{},
});

const ExpensesCtxProvider = ({children}) =>{

    const value={

    }
    return <ExpensesCtx.Provider value={value}>
                {children}  
           </ExpensesCtx.Provider>
}

export default ExpensesCtxProvider;