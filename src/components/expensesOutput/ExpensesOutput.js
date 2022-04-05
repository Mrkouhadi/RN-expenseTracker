import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES = [
    {
        id:'e1', description:'a pair of plack pants', amount:35.89, date:new Date('06-19-2021')
    },
    {
        id:'e2', description:'New Iphone 13', amount:960.99, date:new Date('06-27-2021')
    },
    {
        id:'e3', description:'a black rain coat', amount:115.00, date:new Date('07-01-2021')
    },
    {
        id:'e4', description:'a blue pai of shoes', amount:85.99, date:new Date('07-02-2021')
    },
]
const ExpensesOutput = ({expenses, expensesPeriod}) => {
  return <View style={styles.constainer}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
         </View>
}
const styles = StyleSheet.create({
    constainer:{
        backgroundColor:'pink',
        paddingHorizontal:24,
        flex:1
    }
})
export default ExpensesOutput