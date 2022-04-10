import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = ({expenses, expensesPeriod, fallbackText}) => {

    let content = <Text style={styles.fallback}>{fallbackText}</Text>

    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses}/>;
    }

  return <View style={styles.constainer}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
         </View>
}

const styles = StyleSheet.create({
    constainer:{
        backgroundColor:GlobalStyles.colors.gray700,
        paddingHorizontal:10, paddingVertical:10,
        paddingBottom:0,
        flex:1
    },
    fallback:{
        fontSize:50,
        color:'red',
        fontWeight:'bold',
        letterSpacing:2,
        textAlign:'center',
        marginTop:150,
        marginHorizontal:50,
    }
})
export default ExpensesOutput