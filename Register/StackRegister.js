import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Register';
import OTP from './OTP';
import Password from './Password';
const Stack=createNativeStackNavigator()
const StackRegister = () => {
  return (
  <Stack.Navigator screenOptions={{
     headerShown:false
  }}>
     <Stack.Screen name='Register' component={Register}/>
     <Stack.Screen name='OTP' component={OTP}/>
     <Stack.Screen name='Password' component={Password}/>
  </Stack.Navigator>
  )
}

export default StackRegister

const styles = StyleSheet.create({})