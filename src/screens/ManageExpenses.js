import React from 'react'
import { View, StyleSheet,SafeAreaView, Text, Pressable, ScrollView } from 'react-native'

const ManageExpenses = props => {
  const { id, user } = props.route.params;  

  return (
    <SafeAreaView style={styles.sectionContainer}>
        <Text>Manage Your Expenses</Text>
    </SafeAreaView>
  )
};

export default ManageExpenses