import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Forget from './Forget';
import OTP from './OTP';
import Password from './Password';
const Stack=createNativeStackNavigator()
const Stackforget = () => {
  return (
    <Stack.Navigator screenOptions={{
     headerShown:false
    }}>
     <Stack.Screen name='Forget' component={Forget}/>
     <Stack.Screen name='OTP' component={OTP}/>
     <Stack.Screen name='Password' component={Password}/>
    </Stack.Navigator>
  )
}

export default Stackforget

const styles = StyleSheet.create({})