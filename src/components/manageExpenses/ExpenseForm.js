import React from 'react'
import { View } from 'react-native'
import Input from './Input'

const ExpenseForm = () => {
    const amountChangeHandler =() =>{

    }
  return <View>
            <Input label="Amount" inputConfig={{
                keyboardType:'decimal-pad',
                onChangeText:amountChangeHandler,
                placeholder:'00.00',
                 placeholderTextColor:"#808080",
            }} />
            <Input label="Date" inputConfig={{
                maxLength:10,
                onChangeText:amountChangeHandler,
                placeholder:'YYYY-MM-DD',
                 placeholderTextColor:"#808080",
            }} />
            <Input label="Description" descStyle={{minHeight:200, textAlignVertical:'top'}} inputConfig={{
                autoCapitalize:'words', //characters, sentences(default) 
                multiline:true,
                onChangeText:amountChangeHandler,
                placeholder:'Type a description...',
                placeholderTextColor:"#808080",
            }} />
         </View>
}

export default ExpenseForm