import React from 'react'
import { StyleSheet } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

const AllExpenses = props => {
  return  <ExpensesOutput expensesPeriod="Total"/>
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
  },
});
export default AllExpenses