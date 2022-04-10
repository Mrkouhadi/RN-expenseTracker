import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({expenses, periodName}) => {
    const totalSum = expenses.reduce((sum, expense)=> {
        return sum + expense.amount
    },0);
    
  return (
    <View style={styles.container}>
        <Text style={styles.periodName}>{periodName}</Text>
        <Text style={styles.totalSum}> ${totalSum.toFixed(2)}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row', alignItems:'center', justifyContent:'space-between',
        backgroundColor:GlobalStyles.colors.primary50,
        borderRadius:6,
        marginBottom:5, marginTop:3
    },
    periodName:{
        fontSize:18,
        color:GlobalStyles.colors.primary400,
    },
    totalSum:{
        fontSize:20, fontWeight:'bold',
        color:GlobalStyles.colors.primary500,
    }
})
export default ExpensesSummary