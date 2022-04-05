import React from 'react'

const ExpensesSummary = ({expenses, periodName}) => {
    const totalSum = expenses.reduce((sum, expense)=> sum + expense.amount);
  return (
    <View>
        <Text>{periodName}</Text>
        <Text> ${totalSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary