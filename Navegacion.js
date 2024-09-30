import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';


import Settings from './Screen/Settings';
import Home from './Screen/Home';
import Users from './Screen/Users';
import DetailHome from './Screen/DetailHome';
import AnotherDetailHome from './Screen/AnotherDetailsHome';

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
            <FontAwesome name="home" size={30} color="black" />
          )
        }}
      />

      <Tab.Screen name='Setting' component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color,size})=> (
            <Fontisto name="player-settings" size={28} color="black" />
          )
        }}
      />

      <Tab.Screen name='Users' component={Users}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: ({color,size})=> (
            <Feather name="user" size={30} color="black" />
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