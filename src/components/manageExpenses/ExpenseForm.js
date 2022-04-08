import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text } from 'react-native'

import Input from './Input';
import CustomBtn from '../../components/ui/CustomBtn';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

const ExpenseForm = ({onCancel, submitFormLabel, onSubmit, defaultValues}) => {

    const [inputs, setInputs] = useState({
        amount:{
            value:defaultValues ? defaultValues.amount.toString() : "", 
            isValid:true
        },
        date:{
            value:defaultValues ? getFormattedDate(defaultValues.date) : "",
            isValid:true
        },
        description:{
            value:defaultValues ? defaultValues.description : "",
            isValid:true
        }
    });
    // !!defaultValues, // instead of : defaultValues ? true : false
    const inputChangeHandler =(inputIdentifier, inputvalue) =>{
        setInputs(currentInputs => {
            return {
                ...currentInputs,
                [inputIdentifier]:{value:inputvalue, isValid:true}
            }
        })
    }
    const onSubmitHandler = ()=>{
            const expenseValues = {
                amount:+inputs.amount.value,
                date:new Date(inputs.date.value),
                description:inputs.description.value,
            };
            const isValidAmount = !isNaN(expenseValues.amount) && expenseValues.amount > 0;
            const isValidDate = expenseValues.date.toString() !== 'Invalid Date';
            const isValidDesc = expenseValues.description.trim().length > 0;

            if(!isValidAmount || !isValidDate || !isValidDesc){
                // Alert.alert("Invalid Input !", "Please make sure you fill in all inputs with the proper format !")
                setInputs(currentInputs => {
                    return {
                        amount:{value:currentInputs.amount.value, isValid:isValidAmount},
                        date:{value:currentInputs.date.value, isValid:isValidDate},
                        description:{value:currentInputs.description.value, isValid:isValidDesc},
                    }
                });
                return;
            }

            onSubmit(expenseValues);
    };

  return <View>
            <Input label="Amount" invalid={!inputs.amount.isValid} inputConfig={{
                keyboardType:'decimal-pad',
                onChangeText:inputChangeHandler.bind(this, 'amount'),
                value:inputs.amount.value,
                placeholder:'00.00',
                placeholderTextColor:"#808080",
            }} />
            {!inputs.amount.isValid && <Text style={styles.errorText}>Error ! - Please double check your data !</Text>}
            <Input label="Date" invalid={!inputs.date.isValid}  inputConfig={{
                maxLength:10,
                onChangeText:inputChangeHandler.bind(this, 'date'),
                value:inputs.date.value,
                placeholder:'YYYY-MM-DD',
                 placeholderTextColor:"#808080",
            }} />
             {!inputs.date.isValid && <Text style={styles.errorText}>Error ! - Please double check your data !</Text>}
            <Input label="Description" descStyle={{minHeight:200, textAlignVertical:'top'}} 
                    invalid={!inputs.description.isValid} 
                    inputConfig={{
                        autoCapitalize:'words', //characters, sentences(default) 
                        multiline:true,
                        onChangeText:inputChangeHandler.bind(this, 'description'),
                        value:inputs.description.value,
                        placeholder:'Type a description...',
                        placeholderTextColor:"#808080",
                    }} />
            {!inputs.description.isValid && <Text style={styles.errorText}>Error ! - Please double check your data !</Text>}
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
  },
  errorText:{
      fontSize:16,
      color:GlobalStyles.colors.error500,
      margin:10
  }
})
export default ExpenseForm