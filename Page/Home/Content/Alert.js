import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import React,{useRef,useEffect} from 'react';
import Images from '../../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Alert = (props) => {
     const anima=useRef(new Animated.Value(-50)).current
     useEffect(()=>{
          Animated.timing(
               anima,
               {
                    toValue:300,
                    duration:500,
                    useNativeDriver:false
               }
          ).start()
     },[])
  return (
    <Modal visible={true} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.05)',
        }}>
        <TouchableOpacity style={{flex:1}} onPress={()=>{
          props.close()
        }}/>
        <Animated.View style={{...styles.container,bottom:anima}}>
          <View style={{}}>
            <Text style={styles.header}>Chuyển Hướng</Text>
            <Text style={styles.text}>
              Chúng tôi sẽ chuyển hướng tới trang mua hàng Tiki.vn
            </Text>
          </View>
          <View style={styles.knot}>
            <TouchableOpacity
              style={styles.refuse}>
              <Text style={styles.choose}>Từ chối</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.agree}>
              <Text style={styles.choose}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{position: 'absolute', right: 16 * px, top: 12 * px}}
            onPress={()=>{
               props.close()
            }}
            >
            <Image source={Images.Close} style={styles.close} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  agree:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    borderLeftWidth: 0.5 * px,
    borderColor: '#fff',
  },
  refuse:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '50%',
    borderRightWidth: 0.5 * px,
    borderColor: '#fff',
  },
  container: {
    width: 270 * px,
    height: 135 * px,
    backgroundColor: '#fff',
    borderRadius: 8 * px,
    alignSelf: 'center',
    position:'absolute',
    
  },
  header: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
    marginTop: 20 * px,
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    marginHorizontal: 16 * px,
  },
  knot: {
    flexDirection: 'row',
    height: 44 * px,
    backgroundColor: '#01B2FF',
    borderBottomRightRadius: 8 * px,
    borderBottomLeftRadius: 8 * px,
    position: 'absolute',
    bottom: 0,
  },
  choose: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#fff',
  },
  close: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
});
