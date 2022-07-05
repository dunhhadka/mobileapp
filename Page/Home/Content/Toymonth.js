import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';
import React,{useState,useRef,useEffect} from 'react';
import Images from '../../../Images/Images';
import Toy from './Toy';
import ListDate from './ListDate';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Toymonth = (props) => {
     const anima=useRef(new Animated.Value(1000*px)).current
     const [list,setList]=useState(false)
     const close=()=>{
          setList(false)
     }
     useEffect(()=>{
          Animated.timing(
               anima,
               {
                    toValue:50*px,
                    duration:500,
                    useNativeDriver:false
               }
          ).start()
     },[])
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
        <Animated.View
          style={{
            height: height - 50 * px,
            marginTop: anima,
            backgroundColor: '#fff',
            paddingHorizontal: 16 * px,
            borderTopRightRadius:20*px,
            borderTopLeftRadius:20*px,
          }}>
          <View style={styles.header}>
            <Image source={Images.game} style={styles.game} />
            <Text style={styles.text}>Đồ chơi theo tháng</Text>
            <TouchableOpacity
            onPress={()=>{
               props.closemonth()
            }}
            >
              <Image source={Images.Close} style={styles.close} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Image source={Images.date} style={styles.game} />
            <Text style={{...styles.text, color: '#01B2FF'}}>THÁNG NÀY</Text>
            <TouchableOpacity
            onPress={()=>{
               setList(true)
            }}
            >
              <Image source={Images.Dos} style={styles.dos} />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Toy />
          </ScrollView>
          {list&&<ListDate close={close}/>}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Toymonth;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 16 * px,
    alignItems: 'center',
  },
  game: {
    width: 18 * px,
    height: 18 * px,
    resizeMode: 'stretch',
  },
  close: {
    width: 20 * px,
    height: 20 * px,
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: 'black',
    marginLeft: 10 * px,
    flex: 1,
  },
  dos: {
    width: 44 * px,
    height: 44 * px,
  },
});
