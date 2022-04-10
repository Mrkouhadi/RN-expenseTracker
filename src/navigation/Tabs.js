import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Platform} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/AntDesign';

import {RecentExpenses, AllExpenses} from '../screens'
import { GlobalStyles } from '../constants/styles';
import IconBtn from '../components/ui/IconBtn';

const Tab = createBottomTabNavigator();

const Tabs=(props)=> {

  return (
    <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerStyle:{backgroundColor:GlobalStyles.colors.error50},
                tabBarStyle:{
                  position:'absolute', bottom:20, right:10, left:10,
                  elevation:0,
                  borderRadius:15,
                  backgroundColor:GlobalStyles.colors.error50,
                  height:70,
                  ...styles.shadow,
                },
                headerRight:({tintColor}) =>  <IconBtn iconName="pluscircleo" color={tintColor} size={30} 
                                            onPress={()=>props.navigation.navigate("Manage Expenses")}
                                   />
            }}
    >
      <Tab.Screen name="Recent Expenses" component={ RecentExpenses} options={{ 
        tabBarIcon: ({focused,color,size}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Ionicons name="wallet" color={color} size={size} />
                              {focused && <Text style={{color:color,marginTop:8 }}>Recent</Text>}
                          </View> )
        }}/>
      <Tab.Screen name="All Expenses" component={AllExpenses} options={{ 
        tabBarIcon: ({focused,color,size}) => (<View style={{alignItems:'center',justifyContent:'center',top:Platform.OS === 'ios'?15:0}}>
                              <Icon name="appstore1" color={color} size={size} />
                              {focused && <Text style={{color:color}}>All</Text>}
                          </View> )
        }}/>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow:{
    shadowColor:'black',
    shadowOffset:{
      width:0, height:8,
    },
    shadowOpacity:.15,
    shadowRadius:3,
    elevation:5,
  }
})
export default Tabs