import { StyleSheet, Text, View ,Image,TextInput} from 'react-native'
import React from 'react'
import Styles from '../Login/Styles'
import Images from '../Images/Images'
const Input = (props) => {
  return (
     <View style={Styles.box}>
        <View>
          <Text style={Styles.textaccount}>{props.text}</Text>
          <View style={Styles.viewinput}>
            <Image source={props.images} style={Styles.lock} />
            <TextInput
              style={Styles.input}
              secureTextEntry={props.images == Images.key ? true : false}
            />
          </View>
        </View>
      </View>
  )
}

export default Input

const styles = StyleSheet.create({})