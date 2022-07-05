import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Images from '../Images/Images';
import Styles from './Styles';
const Backgound = () => {
  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#E5E5E5" />
      <Image source={Images.unit} style={Styles.unit} />
      <Image source={Images.lamp} style={Styles.lamp} />
      <Image source={Images.unit2} style={{...Styles.unit, marginTop: 50}} />
      <Image source={Images.unit2} style={{...Styles.unit, marginTop: 50}} />
      <Image source={Images.clock} style={Styles.clock} />
    </View>
  );
};

export default Backgound;

const styles = StyleSheet.create({});
