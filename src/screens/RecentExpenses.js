import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import ErrorOverlay from '../components/ui/ErrorOverlay';
import { ExpensesCtx } from '../store/Expenses-ctx';
import { getDateMinusDays } from '../util/date';
import { fetchExpensesFromDb } from '../util/http';

const RecentExpenses = (props) => {
        const [isFetching, setIsFetching] = useState();
        const [error, setError] = useState();
        const ourExpenseCtx = useContext(ExpensesCtx);

        useEffect(()=>{
          async function fetch(){
            setIsFetching(true);
            try{
              const expenses = await fetchExpensesFromDb();
              ourExpenseCtx.setExpenses(expenses);
            }catch(err){
              setError('Could not fetch expenses from the database !');
            }
            setIsFetching(false);
          }
          fetch();
        },[]);

        const recentExpenses = ourExpenseCtx.expenses.filter(expense =>{
          const today = new Date();
          const last7days = getDateMinusDays(today, 7);

          return (expense.date >= last7days) && (expense.date <= today);
        })

        if(error && !isFetching) return <ErrorOverlay message={error} />
        if(isFetching) return <LoadingOverlay />
  return<ExpensesOutput fallbackText="No Recenet Expenses Yet !!!" expenses={recentExpenses} expensesPeriod="Last 7 Days"/>
};
export default RecentExpenses