import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';

import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDetailsHome';

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}
      >

      <Tab.Screen name='HomeSreen' component={StackDetailHome}
        options={{
          tabBarLabel: 'HomeSreen',
          tabBarIcon: ({color,size})=> (
            <AntDesign name='home' size={30} color={color} />
          )
        }}
      />

      <Tab.Screen name='Setting' component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color,size})=> (
            <AntDesign name='settings' size={30} color={color} />
          )
        }}
      />

      <Tab.Screen name='Users' component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color,size})=> (
            <AntDesign name='users' size={30} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
};

const DetailHomeNavigator = createStackNavigator();

function StackDetailHome(){
  return(
      <DetailHomeNavigator.Navigator
        initialRouteName='Home'>
          <DetailHomeNavigator.Screen
          name="Home"
          component={Home}>
      </DetailHomeNavigator.Screen>
      <DetailHomeNavigator.Screen
          name="DetailHome"
          component={DetailHome}>
      </DetailHomeNavigator.Screen>
      <DetailHomeNavigator.Screen
          name="AnotherDetailHome"
          component={AnotherDetailHome}>
      </DetailHomeNavigator.Screen>
    </DetailHomeNavigator.Navigator>
  )
}

export default function Navigacion() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}