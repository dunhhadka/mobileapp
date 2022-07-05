import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Backroundfull from './Backroundfull';
import Input from './Input';
import Images from '../Images/Images';
import Knot from './Knot';
import Muiten from './Muiten';
const width = Dimensions.get('window').width;
const px = width / 414;
const Password = ({navigation}) => {
  return (
    <View>
      <Backroundfull text="Xác thực mật khẩu" />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 260 * px,
        }}>
        <Input text="Nhập mật khẩu" images={Images.key} />
        <Input text="Nhập lại mật khẩu" images={Images.key} />
        <TouchableOpacity style={{marginTop:40*px}}
        onPress={()=>{
          navigation.navigate('Login')
        }}
        >
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

export default Password;

const styles = StyleSheet.create({});
