import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexPage from './IndexPage';
import Drawer from './Drawer/Drawer';
const Stack = createNativeStackNavigator();
const Page = () => {
  return (
    <Stack.Navigator screenOptions={{
     headerShown:false
    }}>
      <Stack.Screen name="Drawer" component={Drawer} />
    </Stack.Navigator>
  );
};

export default Page;

const styles = StyleSheet.create({});
