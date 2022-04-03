import React from 'react'
import { View, StyleSheet,SafeAreaView,Text } from 'react-native'
import Colors from '../constants/Colors';

const RecentExpenses = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
               <Text style={styles.title}>Your Recent Expenses</Text>
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

export default RecentExpenses