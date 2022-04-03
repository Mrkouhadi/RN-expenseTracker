import React from 'react'
import { View, StyleSheet,SafeAreaView, Text, Pressable, ScrollView } from 'react-native'
import CustomBackBtn from '../components/CustomBackBtn';
import Colors from '../constants/Colors';

const ManageExpenses = props => {
  const { id, user } = props.route.params;  

  return (
    <SafeAreaView style={styles.sectionContainer}>
     
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    // paddingHorizontal: 10,
    backgroundColor:Colors.accnetColor,
    flex:1,
    justifyContent:'center', alignItems:'center',
  },
  title:{
      fontSize:22,
      fontWeight:'bold',
      letterSpacing:2,
      color:Colors.fontColor,
  },
  header:{
    width:"100%",
    paddingHorizontal:15,
    height:50,
    elevation:0,
    justifyContent:'space-between', alignItems:'center', flexDirection:'row',
  },
  chats:{
    flex:1,
    width:"100%",
    backgroundColor:"#fff",
    borderRadius:25,
    marginBottom:-30
  }
});
export default ManageExpenses