import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
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
  clock:{
     width:76.36*px,
     height:76.36*px,
     position:'absolute',
     marginTop:500*px
  },
  Babukids:{
     width:148*px,
     height:128*px,
     
  },
  Viewtext:{
     position:'absolute',
     alignSelf:'center',
     marginTop:279*px,
     alignItems:'center'
  },
  text:{
     fontSize:19*px,
     fontWeight:'400',
     color:'#333333',
     marginTop:40*px
  }
});
export default Styles;
