import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Backroundfull from '../Register/Backroundfull';
import Knot from '../Register/Knot';
import Input from '../Register/Input';
import Images from '../Images/Images';
import Muiten from '../Register/Muiten';
const width = Dimensions.get('window').width;
const px = width / 414;
const Forget = ({navigation}) => {
  return (
    <View>
      <Backroundfull text="QUÊN MẬT KHẨU" />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 270 * px,
        }}>
        <Input text="Email hoặc Số điện thoại" images={Images.lock} />
        <TouchableOpacity style={{marginTop:40*px}} onPress={()=>{
          navigation.navigate('OTP')
        }}>
          <Knot text="Xác nhận" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{position:'absolute'}} onPress={()=>{
          navigation.goBack()
      }}>
      <Muiten/>
      </TouchableOpacity>
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({});
