import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login/Login'
import Rules from '../Login/Rules/Rules'
import StackRegister from '../Register/StackRegister';
import Stackforget from '../ForgetPassword/Stackforget';
import Infomation from '../ForgetPassword/Infomation/Infomation';
import IndexPage from '../Page/IndexPage';
import Drawer from '../Page/Drawer/Drawer';

const Stack1=createNativeStackNavigator()
const Stack = () => {
  return (
    <Stack1.Navigator screenOptions={{
     headerShown:false
    }}>
     <Stack1.Screen name='Login' component={Login}/>
     <Stack1.Screen name='Dieukhoan' component={Rules}/>
     <Stack1.Screen name='StackRegister' component={StackRegister}/>
     <Stack1.Screen name='Forgetpassword' component={Stackforget}/>
     <Stack1.Screen name='Infomation' component={Infomation}/>
     <Stack1.Screen name='Page' component={Drawer}/>
    </Stack1.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})