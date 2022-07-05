import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Images from '../../Images/Images';
import Buying from './Buying';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;

const Drawer = props => {
  const anima = useRef(new Animated.Value(-350 * px)).current;
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };
  useEffect(() => {
    Animated.timing(anima, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          flexDirection: 'row',
        }}>
        <Animated.View style={{...styles.container, left: anima}}>
          <View style={styles.header}>
            <Image source={Images.logo} style={styles.babukids} />
            <TouchableOpacity
              onPress={() => {
                props.closeDrawer();
              }}>
              <Image source={Images.Close} style={styles.close} />
            </TouchableOpacity>
          </View>
          <View style={styles.avatar}>
            <Image source={Images.baby} style={styles.baby} />
            <View
              style={{marginLeft: 16 * px, justifyContent: 'space-between'}}>
              <Text style={styles.email}>Nst.testing.vn@gmail.com</Text>
              <Text style={styles.pass}>● ● ● ● ● ● ● ●</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.knot}
            onPress={() => {
              setShow(true);
            }}>
            <Image source={Images.photo} style={styles.photo} />
            <Text style={styles.text}>Mua gói để có nhiều tính năng hơn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.language}>
            <Image source={Images.language} style={styles.lang} />
            <Text style={styles.textlang}>Ngôn ngữ</Text>
            <View style={styles.adjust}>
              <View
                style={{
                  width: 40 * px,
                  backgroundColor: '#01B2FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontWeight: '400', fontSize: 11 * px, color: '#fff'}}>
                  ENG
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 11 * px,
                    color: '#01B2FF',
                  }}>
                  VIE
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.language}>
            <Image source={Images.share} style={styles.lang} />
            <Text style={styles.textlang}>Chia sẻ ứng dụng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.language}
            onPress={() => {
              props.change();
            }}>
            <Image source={Images.lock} style={styles.lang} />
            <Text style={styles.textlang}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.language}
            onPress={() => {
              props.logout();
            }}>
            <Image source={Images.logout} style={styles.lang} />
            <Text style={styles.textlang}>Đăng xuất</Text>
          </TouchableOpacity>
          <Image source={Images.picturethree} style={styles.imagefooter} />
        </Animated.View>
        {show && <Buying close={close} />}
        <TouchableOpacity style={{flex: 1}} onPress={()=>{
          props.closeDrawer();
        }}/>
      </View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    width: 348 * px,
    height,
    backgroundColor: 'red',
    borderTopRightRadius: 20 * px,
    borderBottomRightRadius: 20 * px,
    backgroundColor: '#fff',
    paddingHorizontal: 16 * px,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 48 * px,
  },
  babukids: {
    width: 160 * px,
    height: 40 * px,
    resizeMode: 'stretch',
  },
  close: {
    width: 20 * px,
    height: 20 * px,
  },
  avatar: {
    flexDirection: 'row',
    marginTop: 35 * px,
  },
  baby: {
    borderRadius: 60,
    width: 44 * px,
    height: 44 * px,
  },
  email: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#333333',
  },
  pass: {
    fontSize: 5,
    color: 'gray',
  },
  knot: {
    width: '100%',
    height: 44 * px,
    backgroundColor: '#F26091',
    borderRadius: 20 * px,
    marginTop: 30 * px,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25 * px,
  },
  photo: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 15 * px,
  },
  language: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40 * px,
  },
  lang: {
    width: 20 * px,
    height: 17 * px,
    resizeMode: 'stretch',
  },
  textlang: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: 'black',
    marginLeft: 24 * px,
  },
  adjust: {
    borderWidth: 1 * px,
    width: 80 * px,
    height: 25 * px,
    borderRadius: 4 * px,
    borderColor: '#01B2FF',
    flexDirection: 'row',
    marginLeft: 110 * px,
  },
  imagefooter: {
    width: 342 * px,
    height: 276 * px,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 5 * px,
  },
});
