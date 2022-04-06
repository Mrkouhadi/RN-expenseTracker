import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ManageExpenses, AllExpenses } from '../../screens'
import Tabs from '../Tabs';

const Stack = createNativeStackNavigator();
const  AppStackNav = () => {
  return (
      <Stack.Navigator >
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
        <Stack.Screen name="All Expenses" component={AllExpenses} options={{headerShown:false}} />
        <Stack.Screen name="Manage Expenses" component={ManageExpenses} 
                      options={{
                            presentation:'modal'
                          }}
          />
      </Stack.Navigator>
  );
}

export default AppStackNav;