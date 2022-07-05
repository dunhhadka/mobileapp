import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Edit from '../Editinfo/Edit';
import IndexPage from '../IndexPage';
import Posts from '../Posts/Posts';
import Content from '../Home/Content/Content';
import Add from '../Add.js/Add';
import Change from '../Change/Change';
import Details from '../Notification/Details';
const Draw=createNativeStackNavigator()
const Drawer = () => {
  return (
   <Draw.Navigator screenOptions={{
    headerShown:false
   }}>
     <Draw.Screen name='Index' component={IndexPage}/>
      <Draw.Screen name='Edit' component={Edit}/>
      <Draw.Screen name='Posts' component={Posts}/>
      <Draw.Screen name='Content' component={Content}/>
      <Draw.Screen name='Add' component={Add}/>
      <Draw.Screen name='Change' component={Change}/>
      <Draw.Screen name='Details' component={Details}/>
   </Draw.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})