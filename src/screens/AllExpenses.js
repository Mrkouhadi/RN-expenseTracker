import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesCtx } from '../store/Expenses-ctx';

const AllExpenses = props => {

  const ourExpenseCtx = useContext(ExpensesCtx);
  return  <ExpensesOutput fallbackText="No Expenses Registered so Far !" expenses={ourExpenseCtx.expenses} expensesPeriod="Total"/>
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
  },
});
export default AllExpenses