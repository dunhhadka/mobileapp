import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useEffect, memo} from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const ModalPay = props => {
  const anima = useRef(new Animated.Value(900)).current;
  const Box = props => {
    return (
      <View style={{marginTop: 15 * px}}>
        <View style={styles.box}>
          <Image source={Images.lock} style={styles.lock} />
          <TextInput />
        </View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
    );
  };
  const closemodal = () => {
    props.closemodalpay();
  };
  useEffect(() => {
    Animated.timing(anima, {
      toValue: 150 * px,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
      <TouchableOpacity style={{flex:1}} onPress={()=>{
        closemodal();
      }}/>
        <Animated.View style={{...styles.container, marginTop: anima}}>
          <View style={styles.header}>
            <Image
              source={Images.pen}
              style={{...styles.imageheader, tintColor: '#F26091'}}
            />
            <Text
              style={{fontSize: 17 * px, fontWeight: '700', color: '#F26091'}}>
              THÔNG TIN THANH TOÁN
            </Text>
            <TouchableOpacity
              onPress={() => {
                closemodal();
              }}>
              <Image source={Images.Close} style={styles.close} />
            </TouchableOpacity>
          </View>
          <Box text="Họ và Tên" />
          <Box text="Ngày tháng năm sinh" />
          <Box text="Số điện thoại" />
          <Box text="Email" />
          <View
            style={styles.end}>
            <Image source={Images.check} style={styles.check} />
            <Text
              style={{fontSize: 15 * px, fontWeight: '700', color: '#333333'}}>
              Gói GOLD{' '}
            </Text>
            <Text
              style={{fontSize: 15 * px, fontWeight: '700', color: '#01B2FF'}}>
              (599k/tháng)
            </Text>
            <Image
              source={Images.Dos}
              style={styles.dos}
            />
          </View>
          <Image
            source={Images.picture}
            style={styles.picture}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default memo(ModalPay);

const styles = StyleSheet.create({
  container: {
    height: 650 * px,
    width,
    backgroundColor: '#fff',

    borderTopLeftRadius: 15 * px,
    borderTopRightRadius: 15 * px,
    paddingHorizontal: 66 * px,
    position:'absolute'
  },
  title: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#01B2FF',
    position: 'absolute',
    top: -5 * px,
  },
  header: {
    flexDirection: 'row',
    marginTop: 30 * px,
    alignItems: 'center',
  },
  imageheader: {
    width: 17 * px,
    height: 17 * px,
    marginRight: 10 * px,
  },
  close: {
    width: 20 * px,
    height: 20 * px,
    marginLeft: 50 * px,
  },
  box: {
    flexDirection: 'row',
    borderBottomWidth: 1 * px,
    borderColor: '#01B2FF',
    alignItems: 'center',
  },
  lock: {
    width: 18 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  check: {
    width: 40 * px,
    height: 40 * px,
  },
  end:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30 * px,
  },
  dos:{
    width: 40,
    height: 40,
    marginTop: 10 * px,
    marginLeft: 40 * px,
  },
  picture:{
    width,
    height: 200 * px,
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  }
});
