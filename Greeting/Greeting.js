import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React,{useEffect} from 'react';
import Images from '../Images/Images';
import Styles from './Styles';
import Backgound from './Backgound';
const Greeting = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Stack')
    },3000)
  },[])
  return (
    <View>
      <Backgound />
      <View style={Styles.Viewtext}>
        <Image source={Images.Babukids} style={Styles.Babukids} />
        <Text style={Styles.text}>Ứng dụng hỗ trợ chăm sóc trẻ</Text>
      </View>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({});
