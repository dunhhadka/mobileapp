import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React,{useState} from 'react';
import Images from '../../Images/Images';
import ModalSucess from './ModalSucess';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Change = ({navigation}) => {
     const [show,setshow]=useState(false)
     const close=()=>{
          setshow(false)
     }
     const GoLogin=()=>{
          navigation.navigate('Login')
     }
  return (
    <View style={Styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#E5E5E5" />
      <Image source={Images.unit} style={Styles.unit} />
      <Image source={Images.lamp} style={Styles.lamp} />
      <Image source={Images.unit2} style={{...Styles.unit, marginTop: 50}} />
      <Image source={Images.unit2} style={{...Styles.unit, marginTop: 50}} />
      <Image source={Images.clock} style={Styles.clock} />
      
      <View style={Styles.view}>
        <Image source={Images.Babukids} style={Styles.bakukids} />
        <Text style={Styles.textchange}>ĐỔI MẬT KHẢU</Text>
        <View style={Styles.viewinput}>
          <Image source={Images.key} style={Styles.key} />
          <TextInput style={{color:'black',marginLeft:10*px}}/>
          <Text style={Styles.title}>Nhập mật khẩu cũ</Text>
        </View>
        <View style={Styles.viewinput}>
          <Image source={Images.key} style={Styles.key} />
          <TextInput style={{color:'black',marginLeft:10*px}}/>
          <Text style={Styles.title}>Nhập mật khẩu mới</Text>
        </View>
        <View style={Styles.viewinput}>
          <Image source={Images.key} style={Styles.key} />
          <TextInput style={{color:'black',marginLeft:10*px}}/>
          <Text style={Styles.title}>Nhập lại mật khẩu mới</Text>
        </View>
        <TouchableOpacity style={Styles.knot}
        onPress={()=>{
          setshow(true)
        }}
        >
          <Text style={Styles.last}>Xác nhận</Text>
          <Image source={Images.rooftop} style={Styles.rooftop}/>
        </TouchableOpacity>
        <Image source={Images.picture} style={Styles.picture}/>
      </View>
     {show&&<ModalSucess close={close} GoLogin={GoLogin}/>}
    </View>
  );
};

export default Change;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width,
    height,
    paddingHorizontal: 16 * px,
  },
  lamp: {
    alignSelf: 'center',
    width: 200 * px,
    height: 83 * px,
    resizeMode: 'stretch',
    position: 'absolute',
    top: -20,
  },
  unit: {
    width: '100%',
    height: 223.89 * px,
  },
  clock: {
    width: 76.36 * px,
    height: 76.36 * px,
    position: 'absolute',
    marginTop: 500 * px,
  },
  Babukids: {
    width: 148 * px,
    height: 128 * px,
  },
  Viewtext: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 279 * px,
    alignItems: 'center',
  },
  text: {
    fontSize: 19 * px,
    fontWeight: '400',
    color: '#333333',
    marginTop: 40 * px,
  },
  picture: {
    width,
    height: 200,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
    bottom:-240*px
  },
  body: {
    position: 'absolute',
  },
  bakukids: {
    width: 148 * px,
    height: 128 * px,
    resizeMode: 'stretch',
  },
  view: {
    position: 'absolute',
    top: 75 * px,
    width,
    alignItems: 'center',
  },
  textchange: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#01B2FF',
    marginTop: 16 * px,
  },
  viewinput: {
    borderBottomWidth: 0.5 * px,
    borderColor: '#01B2FF',
    width: 282 * px,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25 * px,
  },
  key: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#01B2FF',
    position: 'absolute',
    top: -7 * px,
  },
  knot:{
     width:282*px,
     height:44*px,
     backgroundColor:'#01B2FF',
     borderRadius:16*px,
     marginTop:40*px,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center'
  },
  last:{
     fontSize:15*px,
     fontWeight:'600',
     color:'#fff'
  },
  rooftop:{
     width:16*px,
     height:6*px,
     marginLeft:14*px,
     resizeMode:'stretch'
  }
});
