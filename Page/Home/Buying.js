import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import React,{useRef,useEffect} from 'react';
import Images from '../../Images/Images';
import Endow from '../Endow';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;

const Buying = (props) => {
     const anima=useRef(new Animated.Value(-900*px)).current
     const pay=()=>{

     }
     useEffect(()=>{
          Animated.timing(
               anima,
               {
                    toValue:0*px,
                    duration:500,
                    useNativeDriver:false
               }
          ).start()
     },[])
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
      <TouchableOpacity style={{flex:1}} onPress={()=>{
        props.close()
      }}/>
        <Animated.View style={{...styles.container, bottom: anima,}}>
          <View style={styles.header}>
            <Image source={Images.logo} style={styles.logo} />
            <TouchableOpacity
            onPress={()=>{
               props.close()
            }}
            >
              <Image source={Images.Close} style={styles.close} />
            </TouchableOpacity>
          </View>
          <Image source={Images.baby1} style={styles.baby} />
          <View style={{marginTop:24*px,left:-16*px}}>
            <Endow Pay={pay}/>
          </View>
          <Image source={Images.picture} style={styles.picture}/>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Buying;

const styles = StyleSheet.create({
  container: {
    width,
    height: 750 * px,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20 * px,
    borderTopRightRadius: 20 * px,
   
    paddingHorizontal: 16 * px,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24 * px,
    justifyContent: 'space-between',
  },
  logo: {
    width: 160 * px,
    height: 40 * px,
  },
  close: {
    width: 20 * px,
    height: 20 * px,
  },
  baby: {
    width: '100%',
    height: 210 * px,
    resizeMode: 'stretch',
    marginTop: 25 * px,
  },
  picture:{
     width:'100%',
     height:200*px,
     resizeMode:'stretch'
  }
});
