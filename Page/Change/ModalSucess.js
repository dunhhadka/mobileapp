import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const ModalSucess = (props) => {
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}>
        <View
          style={{
            width: 290 * px,
            height: 140 * px,
            backgroundColor: '#fff',
            borderRadius: 8 * px,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 17 * px,
                fontWeight: '700',
                color: 'black',
                marginTop: 24 * px,
              }}>
              Đối mật khẩu thành công
            </Text>
            <Text
              style={{
                fontSize: 13 * px,
                fontWeight: '400',
                color: 'black',
                textAlign: 'center',
              }}>
              Chúng tôi đã cập nhật mật khẩu cho tài khoản nst.testing
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#01B2FF',
              flex: 1,
              marginTop: 10 * px,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 8 * px,
              borderBottomRightRadius: 8 * px,
              elevation: 1 * px,
            }}
            onPress={()=>{
               props.GoLogin()
            }}
            >
            <Text style={{fontSize: 17 * px, fontWeight: '700', color: '#fff'}}>
              Đồng ý
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{position: 'absolute', right: 10 * px, top: 10 * px}}
            onPress={()=>{
               props.close()
            }}
            >
            <Image
              source={Images.Close}
              style={{
                width: 22 * px,
                height: 22 * px,
                resizeMode: 'stretch',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSucess;

const styles = StyleSheet.create({});
