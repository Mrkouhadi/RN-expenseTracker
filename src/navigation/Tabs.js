import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Platform} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/AntDesign';

import {RecentExpenses, AllExpenses} from '../screens'
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const Tabs=()=> {

  return (
    <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown:false,
                tabBarStyle:{
                  position:'absolute', bottom:25, right:20, left:20,
                  elevation:0,
                  borderRadius:15,
                  backgroundColor:"#f9f9f9",
                  height:70,
                  ...styles.shadow,
                }
            }}
    >
      <Tab.Screen name="AllExpenses" component={AllExpenses} options={{ 
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Ionicons name="chatbox-ellipses-outline" color={focused ? Colors.primaryColor:Colors.fontColor} size={25} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>Chat</Text>}
                          </View> )
        }}/>
      <Tab.Screen name="RecentExpenses" component={RecentExpenses} options={{ 
        tabBarIcon: ({focused}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Icon name="user" color={focused ? Colors.primaryColor:Colors.fontColor} size={25} />
                              {focused && <Text style={{color:Colors.primaryColor,marginTop:8 }}>Profile</Text>}
                          </View> )
        }}/>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow:{
    shadowColor:Colors.primaryColor,
    shadowOffset:{
      width:0, height:8,
    },
    shadowOpacity:.15,
    shadowRadius:3,
    elevation:5,
  }
})
export default Tabs