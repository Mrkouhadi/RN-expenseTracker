import React from 'react'
import { FlatList } from 'react-native'
import ExpensesItem from './ExpensesItem'

const renderExpensesItem = (data) =>{
    return <ExpensesItem {...data.item} />
}
const ExpensesList = ({expenses}) => {
  return <FlatList style={{marginBottom:85, backgroundColor:"transparent"}} data={expenses} renderItem={renderExpensesItem} />
}

export default ExpensesList;