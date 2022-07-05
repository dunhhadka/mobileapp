import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import Images from '../Images/Images'
const width = Dimensions.get('window').width;
const px = width / 414;
const Muiten = () => {
  return (
     <View
     style={{
      
       marginLeft: 34 * px,
       marginTop: 40 * px,
       width: 30,
       height: 30,
     }}
     onPress={() => {
       navigation.navigate('Login');
     }}>
     <Image
       source={Images.muiten}
       style={{
         width: 8 * px,
         height: 16 * px,
         resizeMode: 'stretch',
       }}
     />
   </View>
  )
}

export default Muiten

const styles = StyleSheet.create({})