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
import React, {useRef, useEffect, memo} from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const ModalAdd = props => {
  const hidden = () => {
    props.hidden();
  };
  const anima = useRef(new Animated.Value(-100 * px)).current;
  useEffect(() => {
    Animated.timing(anima, {
      toValue: 100,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            props.closeadd();
          }}
        />
        <Animated.View
          style={{
            ...styles.container,
            top: anima,
          }}>
          <View style={styles.info}>
            <Image source={Images.info} style={styles.infoavatar} />
            <View style={{flex: 1, marginLeft: 10 * px}}>
              <Text style={styles.name}>BÉ NANA</Text>
              <Text style={styles.age}>12 tháng tuổi</Text>
            </View>
            <TouchableOpacity
            onPress={()=>{
              props.gotoedit()
            }}
            >
              <Image source={Images.Edit} style={styles.edit} />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Image source={Images.info} style={styles.infoavatar} />
            <View style={{flex: 1, marginLeft: 10 * px}}>
              <Text style={styles.name}>BÉ NANA</Text>
              <Text style={styles.age}>12 tháng tuổi</Text>
            </View>
            <Image source={Images.Edit} style={styles.edit} />
          </View>
          <View style={styles.add}>
            <TouchableOpacity
              onPress={() => {
                hidden();
              }}>
              <Image source={Images.Add} style={styles.Add} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default memo(ModalAdd);

const styles = StyleSheet.create({
  container: {
    width: 382 * px,
    height: 206 * px,
    backgroundColor: '#fff',
    borderRadius: 16 * px,
    alignSelf: 'center',
    position: 'absolute',
  },
  info: {
    flexDirection: 'row',
    paddingHorizontal: 16 * px,
    alignItems: 'center',
    marginTop: 20 * px,
  },
  infoavatar: {
    width: 44 * px,
    height: 44 * px,
  },
  edit: {
    width: 18 * px,
    height: 18 * px,
  },
  add: {
    marginHorizontal: 16 * px,
    height: 63 * px,
    marginTop: 15 * px,
    borderTopWidth: 1 * px,
    borderColor: '#01B2FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Add: {
    width: 94 * px,
    height: 24 * px,
  },
  name: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#01B2FF',
  },
  age: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#01B2FF',
  },
});
