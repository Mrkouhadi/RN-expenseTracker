import React from 'react'
import { StyleSheet,SafeAreaView, Text, Button } from 'react-native'
import Colors from '../constants/Colors';

const AllExpenses = props => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text>All Expenses</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    backgroundColor:Colors.accnetColor,
    flex:1,
    justifyContent:'center', alignItems:'center',
  },
  title:{
      fontSize:22,
      fontWeight:'bold',
      letterSpacing:2
  }
});
export default AllExpenses