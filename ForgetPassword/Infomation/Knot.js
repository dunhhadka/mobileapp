import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const px = width / 414;
const Knot = props => {
  return (
    <View style={{...Styles.login, width: 282 * px, alignSelf: 'center'}}>
      <Text style={Styles.textlogin1}>{props.text} </Text>
      <Image source={Images.rooftop} style={Styles.rooftop} />
    </View>
  );
};

export default Knot;

const Styles = StyleSheet.create({
  login: {
    width: '100%',
    height: 44 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 16 * px,
    marginTop: 16 * px,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textlogin1: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  rooftop: {
    width: 15 * px,
    height: 7 * px,
    resizeMode: 'stretch',
    marginTop: 3 * px,
    marginLeft: 5 * px,
  },
});
