import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import Backroundfull from './Backroundfull';
import Knot from './Knot';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const OTP = ({navigation}) => {
  const Otp = () => {
    return (
      <View
        style={{
          width: 45.4 * px,
          height: 46 * px,
          borderRadius: 10 * px,
          borderWidth: 1.5 * px,
          borderColor: '#01B2FF',
          marginHorizontal: 6 * px,
        }}
      />
    );
  };
  return (
    <View>
      <Backroundfull text="XÁC THỰC OTP" />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 285 * px,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Otp />
          <Otp />
          <Otp />
          <Otp />
          <Otp />
          <Otp />
        </View>
        <View style={{flexDirection: 'row',alignItems:'center',marginTop:24*px,marginBottom:40*px}}>
          <Text
            style={{fontSize: 13 * px, fontWeight: '400', color: '#333333'}}>
            OTP đã được gửi về Email của bạn
          </Text>
          <TouchableOpacity
            style={{
              width: 72 * px,
              height: 32 * px,
              borderRadius: 10 * px,
              borderWidth: 1 * px,
              borderColor: '#01B2FF',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft:16*px,
              
            }}>
            <Text style={{fontWeight:'400',fontSize:13*px,color:'#01B2FF'}}>gửi lại</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Password')
        }}>
        <Knot text="Xác nhận"  />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
      style={{
        position: 'absolute',
        marginLeft: 34 * px,
        marginTop: 40 * px,
        width: 30,
        height: 30,
      }}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image
        source={Images.muiten}
        style={{
          width: 8 * px,
          height: 16 * px,
          resizeMode: 'stretch',
        }}
      />
    </TouchableOpacity>
    </View>
  );
};

export default OTP;
