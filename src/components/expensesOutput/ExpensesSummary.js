import React from 'react'

const ExpensesSummary = ({periodName}) => {
  return (
    <View>
        <Text>{periodName}</Text>
        <Text> $ 367.34</Text>
    </View>
  )
}

export default ExpensesSummary