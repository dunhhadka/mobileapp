import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Greeting from './Greeting/Greeting';

import Stack from './Stack/Stack';
const Stack1 = createNativeStackNavigator();
const Index = () => {
  return (
    <Stack1.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack1.Screen name="Greeting" component={Greeting} />
      <Stack1.Screen name="Stack" component={Stack} />
    </Stack1.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({});
