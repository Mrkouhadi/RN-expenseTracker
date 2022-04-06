import React from 'react';
import {StatusBar, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNav from './src/navigation/stacks/AppStackNav';
import ExpensesCtxProvider from './src/store/Expenses-ctx';

const App = () => {
  return <ExpensesCtxProvider>
            <NavigationContainer>
              <AppStackNav />
            </NavigationContainer>
          </ExpensesCtxProvider>
        
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    backgroundColor:'#98AFC7',
    flex:1,

  },
});
export default App;