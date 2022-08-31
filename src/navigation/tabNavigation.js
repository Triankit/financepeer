import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  HomeStack,
  MapStack,
  DataStack,
  ProfileStack,
  SettingStack,
} from './stackNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const TabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapStack}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color}) => (
            <FontAwesome name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DataScreen"
        component={DataStack}
        options={{
          tabBarLabel: 'Data',
          tabBarIcon: ({color}) => (
            <FontAwesome name="database" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <FontAwesome name="gear" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
