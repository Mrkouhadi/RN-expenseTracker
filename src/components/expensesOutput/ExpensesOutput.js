import React from 'react'
import { View } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = () => {
  return <View>
            <ExpensesSummary periodName={"last 10 days"}/>
            <ExpensesList />
         </View>
}

export default ExpensesOutput