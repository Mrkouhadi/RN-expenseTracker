import React, { useContext, useEffect } from 'react'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesCtx } from '../store/Expenses-ctx';
import { getDateMinusDays } from '../util/date';
import { fetchExpensesFromDb } from '../util/http';

const RecentExpenses = (props) => {
        const ourExpenseCtx = useContext(ExpensesCtx);

        useEffect(()=>{
          async function fetch(){
            const expenses = await fetchExpensesFromDb();
            ourExpenseCtx.setExpenses(expenses);
          }
          fetch();
        },[]);

        const recentExpenses = ourExpenseCtx.expenses.filter(expense =>{
          const today = new Date();
          const last7days = getDateMinusDays(today, 7);

          return (expense.date >= last7days) && (expense.date <= today);
        })
  return<ExpensesOutput fallbackText="No Recenet Expenses Yet !!!" expenses={recentExpenses} expensesPeriod="Last 7 Days"/>
};
export default RecentExpenses