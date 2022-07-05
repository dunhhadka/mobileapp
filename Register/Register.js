import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Backroundfull from './Backroundfull';
import Images from '../Images/Images';
import Styles from '../Login/Styles';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Register = ({navigation}) => {
  const Input = props => {
    return (
      <View style={Styles.box}>
        <View>
          <Text style={Styles.textaccount}>{props.text}</Text>
          <View style={Styles.viewinput}>
            <Image source={props.images} style={Styles.lock} />
            <TextInput style={Styles.input} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Backroundfull text='Đăng ký'/>
      
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 300 * px,
          width: '100%',
          paddingHorizontal: 67,
          alignItems: 'center',
        }}>
        <Input images={Images.lock} text="Email hoặc Số điện thoại" />
        <TouchableOpacity style={{...Styles.login, marginTop: 50 * px}} onPress={()=>{
          navigation.navigate('OTP')
        }}>
          <Text style={Styles.textlogin1}>Xác nhận </Text>
          <Image source={Images.rooftop} style={Styles.rooftop} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={Styles.text}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text style={Styles.rules}>Đăng nhập</Text>
            <View style={{borderWidth: 0.5, borderColor: '#01B2FF'}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
