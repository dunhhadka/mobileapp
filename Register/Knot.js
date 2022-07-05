import {StyleSheet, Text, TouchableOpacity,Image,Dimensions, View} from 'react-native';
import React from 'react';
import Styles from '../Login/Styles';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const px = width / 414;
const Knot = (props) => {
  return (
    <View style={{...Styles.login,width:282*px,alignSelf:'center'}}>
      <Text style={Styles.textlogin1}>{props.text} </Text>
      <Image source={Images.rooftop} style={Styles.rooftop} />
    </View>
  );
};

export default Knot;

const styles = StyleSheet.create({});
