import React, { useContext, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpenseForm from '../components/manageExpenses/ExpenseForm';
import IconBtn from '../components/ui/IconBtn';
import { GlobalStyles } from '../constants/styles';
import { ExpensesCtx } from '../store/Expenses-ctx';

const ManageExpenses = ({route, navigation}) => {
  const expenseId = route.params?.id;  
  const isEditing = !!expenseId; // if we got an id, it will return true, otherwise, false
  const ourExpenseCtx = useContext(ExpensesCtx);

  const selectedExpense = ourExpenseCtx.expenses.find(exp => exp.id === expenseId);
  

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

  const confirmHandler = DATA =>{
        if(isEditing){
          ourExpenseCtx.updateExpense(expenseId, DATA)
        }else{
          ourExpenseCtx.addExpense(DATA);
        }
        navigation.goBack();
};

  return  <View style={styles.container}>
            <ExpenseForm onSubmit={confirmHandler}  submitFormLabel={isEditing?'UPDATE':'ADD'} 
                        defaultValues={selectedExpense} onCancel={cancelHandler} />

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
  }
})
export default ManageExpenses;