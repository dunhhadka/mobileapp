import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Backgound from '../Greeting/Backgound';
import Styles from './Styles';

import Images from '../Images/Images';

const Login = ({navigation}) => {
  const [notchoose, setNotchoose] = useState(true);
  const Input = props => {
    return (
      <View style={Styles.box}>
        <View>
          <Text style={Styles.textaccount}>{props.text}</Text>
          <View style={Styles.viewinput}>
            <Image source={props.images} style={Styles.lock} />
            <TextInput
              style={Styles.input}
              secureTextEntry={props.text == 'Mật khẩu' ? true : false}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Backgound />
      <View style={Styles.viewlogin}>
        <Image source={Images.Babukids} style={Styles.Babukids} />
        <Text style={Styles.textlogin}>ĐĂNG NHẬP</Text>
        <Input text="Tài khoản" images={Images.lock} />
        <Input text="Mật khẩu" images={Images.key} />
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Forgetpassword')
        }}>
          <Text style={Styles.foget}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>{
               setNotchoose(!notchoose)
          }}>
            <Image source={Images.choose} style={Styles.choose} />
            {!notchoose&&<Image source={Images.volume} style={Styles.volume} />}
          </TouchableOpacity>
          <Text style={Styles.text}>Tôi đồng ý với </Text>
          <TouchableOpacity onPress={()=>{
               navigation.navigate('Dieukhoan')
          }}>
            <Text style={Styles.rules}>Điều khoản</Text>
            <View style={{borderWidth: 0.5, borderColor: '#01B2FF'}} />
          </TouchableOpacity>
          <Text style={Styles.text}> sử dụng</Text>
        </View>
        <TouchableOpacity style={Styles.login} onPress={()=>{
          navigation.navigate('Infomation')
        }}>
          <Text style={Styles.textlogin1}>Đăng nhập </Text>
          <Image source={Images.rooftop} style={Styles.rooftop} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={Styles.text}>Bạn chưa có tài khoản? </Text>
          <TouchableOpacity onPress={()=>{
               navigation.navigate('StackRegister')
          }}>
            <Text style={Styles.rules}>Đăng ký.</Text>
            <View style={{borderWidth: 0.5, borderColor: '#01B2FF'}} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={Images.picture} style={Styles.picture}/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
