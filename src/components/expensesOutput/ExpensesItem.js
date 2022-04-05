import React from 'react'
import {  Pressable, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import { getFormattedDate } from '../../util/date'

const ExpensesItem = ({description, date, amount}) => {
  return <Pressable>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
}
const styles = StyleSheet.create({
    container:{
        padding:12, 
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary200,
        flexDirection:'row', justifyContent:'space-between', alignItems:'center',
        borderRadius:6,
        shadowColor:GlobalStyles.colors.primary800,
        shadowOffset:{width:1, height:1},
        shadowOpacity:.3,
        elevation:3,
        shadowRadius:4
    },
    textBase:{
        color:GlobalStyles.colors.error50,
    },
    description:{
        fontSize:16, fontWeight:'bold',
        marginBottom:5
    },
    amountContainer:{
        paddingHorizontal:12, paddingVertical:8,
        backgroundColor:"#f9f9f9",
        justifyContent:'center', alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold',
    }
})
export default ExpensesItem