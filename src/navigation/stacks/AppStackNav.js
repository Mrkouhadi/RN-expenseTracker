import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ManageExpenses, AllExpenses } from '../../screens'
import Tabs from '../Tabs';

const Stack = createNativeStackNavigator();
const  AppStackNav = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
        <Stack.Screen name="AllExpenses" component={AllExpenses} options={{headerShown:false}} />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default AppStackNav;