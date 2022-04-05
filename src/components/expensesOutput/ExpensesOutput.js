import React from 'react'
import { View } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return <View>
            <ExpensesSummary periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
         </View>
}

export default ExpensesOutput