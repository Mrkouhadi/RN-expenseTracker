import React from 'react'
import { View, StyleSheet,SafeAreaView,Text } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import Colors from '../constants/Colors';

const RecentExpenses = (props) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
        <ExpensesOutput expensesPeriod="in the last 7 Days"/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    backgroundColor:Colors.accnetColor,
    flex:1,
    justifyContent:'center', alignItems:'center',
  },
  title:{
      fontSize:22,
      fontWeight:'bold',
      letterSpacing:2
  }
});

export default RecentExpenses