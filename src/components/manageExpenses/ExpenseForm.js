import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Input from './Input';
import CustomBtn from '../../components/ui/CustomBtn';
import { getFormattedDate } from '../../util/date';

const ExpenseForm = ({onCancel, submitFormLabel, onSubmit, defaultValues}) => {

    const [inputValues, setInputValues] = useState({
        amount:defaultValues ? defaultValues.amount.toString() : "", 
        // date:defaultValues ? defaultValues.date.toISOString().slice(0,10) : "",
        date:defaultValues ? getFormattedDate(defaultValues.date) : "",
        description:defaultValues ? defaultValues.description : "",
    });
    const inputChangeHandler =(inputIdentifier, inputvalue) =>{
        setInputValues(currInputValues => {
            return {
                ...currInputValues,
                [inputIdentifier]:inputvalue
            }
        })
    }
    const onSubmitHandler = ()=>{
            const expenseValues = {
                amount:+inputValues.amount,
                date:new Date(inputValues.date),
                description:inputValues.description,
            };
            const isValidAmount = !isNaN(expenseValues.amount) && expenseValues.amount > 0;
            const isValidDate = expenseValues.date.toString() !== 'Invalid Date';
            const isValidDesc = expenseValues.description.trim().length > 0;

            if(!isValidAmount || !isValidDate || !isValidDesc) return;

            onSubmit(expenseValues);
    };

  return <View>
            <Input label="Amount" inputConfig={{
                keyboardType:'decimal-pad',
                onChangeText:inputChangeHandler.bind(this, 'amount'),
                value:inputValues.amount,
                placeholder:'00.00',
                 placeholderTextColor:"#808080",
            }} />
            <Input label="Date" inputConfig={{
                maxLength:10,
                onChangeText:inputChangeHandler.bind(this, 'date'),
                value:inputValues.date,
                placeholder:'YYYY-MM-DD',
                 placeholderTextColor:"#808080",
            }} />
            <Input label="Description" descStyle={{minHeight:200, textAlignVertical:'top'}} inputConfig={{
                autoCapitalize:'words', //characters, sentences(default) 
                multiline:true,
                onChangeText:inputChangeHandler.bind(this, 'description'),
                value:inputValues.description,
                placeholder:'Type a description...',
                placeholderTextColor:"#808080",
            }} />
            <View style={styles.btnContainer}>
              <CustomBtn style={styles.btn} mode="flat" onPress={onCancel}>CANCEL</CustomBtn>
              <CustomBtn style={styles.btn} mode="" onPress={onSubmitHandler}>{submitFormLabel}</CustomBtn>
            </View>
         </View>
}
const styles = StyleSheet.create({
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between', alignItems:'center'
  },
  btn:{
    minWidth:120
  }
})
export default ExpenseForm