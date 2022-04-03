import React from 'react';
import {StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNav from './src/navigation/stacks/AppStackNav';

const App = () => {
  return  <NavigationContainer>
            <AppStackNav />
          </NavigationContainer>
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 10,
    backgroundColor:'#98AFC7',
    flex:1,

  },
});
export default App;