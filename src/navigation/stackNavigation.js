import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../components/screens/homeScreen';
import {ProfileScreen} from '../components/screens/profileScreen';
import {MapScreen} from '../components/screens/mapScreen';
import {DataScreen} from '../components/screens/dataScreen';
import {SettingScreen} from '../components/screens/settingSetting';
import {CameraScreen} from '../components/features/camera';
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export const DataStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Data" component={DataScreen} />
    </Stack.Navigator>
  );
};

export const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};
