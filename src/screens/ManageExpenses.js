import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ExpenseForm from '../components/manageExpenses/ExpenseForm';
import IconBtn from '../components/ui/IconBtn';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { GlobalStyles } from '../constants/styles';
import { ExpensesCtx } from '../store/Expenses-ctx';
import { addExpenseToDb, deleteExpenseIFromDb, updateExpenseInDb } from '../util/http';

const ManageExpenses = ({route, navigation}) => {
  const expenseId = route.params?.id;  
  const isEditing = !!expenseId; // if we got an id, it will return true, otherwise, false
  const ourExpenseCtx = useContext(ExpensesCtx);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const selectedExpense = ourExpenseCtx.expenses.find(exp => exp.id === expenseId);
  

  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? "Update Your Expense" : "Add New Expense"
    })
  },[navigation,isEditing]);

  const deleteHandler =async () =>{
    setIsSubmitting(true)
    await deleteExpenseIFromDb(expenseId)
    setIsSubmitting(false)
    ourExpenseCtx.deleteExpense(expenseId)
    navigation.goBack();
  }
  const cancelHandler = () =>{
    navigation.goBack();
  };

  const  confirmHandler = async DATA =>{
        setIsSubmitting(true)
        if(isEditing){
          ourExpenseCtx.updateExpense(expenseId, DATA);
          await updateExpenseInDb(expenseId, DATA)
        }else{
          const id = await addExpenseToDb(DATA); // we store the object and get it ID
          ourExpenseCtx.addExpense({...DATA, id:id});
        }
        setIsSubmitting(false)
        navigation.goBack();
};
  if(isSubmitting) return <LoadingOverlay />;
  return  <View style={styles.container}>
            <ExpenseForm onSubmit={confirmHandler}       submitFormLabel={isEditing?'UPDATE':'ADD'} 
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