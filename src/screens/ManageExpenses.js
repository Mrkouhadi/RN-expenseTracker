import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import CustomBtn from '../components/ui/CustomBtn';
import IconBtn from '../components/ui/IconBtn';
import { GlobalStyles } from '../constants/styles';

const ManageExpenses = ({route, navigation}) => {
  const expenseId = route.params?.id;  
  const isEditing = !!expenseId; // if we got an id, it will return true, otherwise, false
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:isEditing ? "Edit Your Expense" : "Add New Expense"
    })
  },[navigation,isEditing]);

  const deleteHandler =()=>{
    console.log(expenseId);
  }
  return  <View style={styles.container}>
            <View style={styles.btnContainer}> 
                <CustomBtn mode="flat" onPress={()=>{}}>Cancel</CustomBtn>
                <CustomBtn mode="" onPress={()=>{}}>
                  CONFIRM
                </CustomBtn>
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
    justifyContent:'space-between'
  }
})
export default ManageExpenses;