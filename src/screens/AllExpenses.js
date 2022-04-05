import React from 'react'
import { StyleSheet,SafeAreaView, Text, Button } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import Colors from '../constants/Colors';

const AllExpenses = props => {
  return  <ExpensesOutput expensesPeriod="total"/>
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
  },
});
export default AllExpenses