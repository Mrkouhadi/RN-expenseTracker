import React from 'react'
import { View, StyleSheet,SafeAreaView,Text } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import Colors from '../constants/Colors';

const RecentExpenses = (props) => {
  return<ExpensesOutput expensesPeriod="IN the last 7 Days"/>

};


export default RecentExpenses