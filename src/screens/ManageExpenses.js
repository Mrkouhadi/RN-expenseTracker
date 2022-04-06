import React, { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CustomBtn from '../components/ui/CustomBtn';
import IconBtn from '../components/ui/IconBtn';
import { GlobalStyles } from '../constants/styles';
import { ExpensesCtx } from '../store/Expenses-ctx';

const ManageExpenses = ({route, navigation}) => {
  const expenseId = route.params?.id;  
  const isEditing = !!expenseId; // if we got an id, it will return true, otherwise, false
  const ourExpenseCtx = useContext(ExpensesCtx);

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? "Update Your Expense" : "Add New Expense"
    })
  },[navigation,isEditing]);

  const deleteHandler =() =>{
    ourExpenseCtx.deleteExpense(expenseId)
    navigation.goBack();
  }
  const cancelHandler = () =>{
    navigation.goBack();
  };
  const confirmHandler = ()=>{
    if(isEditing){
      ourExpenseCtx.updateExpense(expenseId,{description:'[UPDATED]blue shirt', amount:88888, date:new Date()})
    }else{
      ourExpenseCtx.addExpense({description:'blue shirt', amount:88888, date:new Date()});
    }
    navigation.goBack();
  };
  return  <View style={styles.container}>
            <View style={styles.btnContainer}>
              <CustomBtn style={styles.btn} mode="flat" onPress={cancelHandler}>CANCEL</CustomBtn>
              <CustomBtn style={styles.btn} mode="" onPress={confirmHandler}>{isEditing?'UPDATE':'ADD'}</CustomBtn>
            </View>
            {
             isEditing && <View style={styles.DelContainer}>
                            <IconBtn onPress={deleteHandler} iconName="delete" color={GlobalStyles.colors.error50} size={35}/>
                          </View>
            }
          </View>
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:GlobalStyles.colors.gray700,
    padding:24,
  },
  DelContainer:{
    marginTop:16, paddingTop:8,
    borderTopWidth:2, borderTopColor:GlobalStyles.colors.primary100,
    alignItems:'center'
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between', alignItems:'center'
  },
  btn:{
    minWidth:120
  }
})
export default ManageExpenses;