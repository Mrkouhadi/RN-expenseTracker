import React from 'react'
import { FlatList, Text } from 'react-native'

const renderExpensesItem = (data) =>{
    return <Text>{data.item.description}</Text>
}
const ExpensesList = ({expenses}) => {
  return <FlatList data={expenses} renderItem={renderExpensesItem} />
}

export default ExpensesList;