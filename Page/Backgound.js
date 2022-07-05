import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,{useState,memo} from 'react';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
import Drawer from './Drawer/Drawer';
const Backgound = (props) => {
 const nextpage=()=>{
  props.nextpage()
 }
 const showmodal=()=>{
  props.show()
 }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{
          props.showDrawer()
        }}>
          <Image source={Images.Drawer} style={styles.drawer} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: 96 * px,
              height: 46 * px,
              alignItems: 'center',
            
            }}
            
            onPress={()=>{
              showmodal()
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.name}>Bé NANA</Text>
              <Image source={Images.vector} style={styles.vector} />
            </View>
            <Text style={styles.age}>12 tháng tuổi</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{
          nextpage()
        }}>
          <Image source={Images.baby} style={styles.avatar}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Backgound);

const styles = StyleSheet.create({
  container: {
    width,
    height: 230 * px,
    backgroundColor: '#01B2FF',
  },
  header: {
    flexDirection: 'row',
    width,
    marginTop: 20 * px,
    paddingHorizontal: 16 * px,
  },
  name: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  age: {
    color: '#FFFFFF',
    fontSize: 13 * px,
    fontWeight: '400',
  },
  avatar: {
    width: 44 * px,
    height: 44 * px,
    borderRadius: 60 * px,
    resizeMode: 'stretch',
  },
  vector: {
    width: 8 * px,
    height: 5 * px,
    resizeMode: 'stretch',
    marginLeft: 5 * px,
  },
  body: {
    backgroundColor: '#E5E5E5',
    flex: 1,

    borderTopRightRadius: 20 * px,
    borderTopLeftRadius: 20 * px,
  },
  drawer: {
    width: 44 * px,
    height: 44 * px,
  },
});
