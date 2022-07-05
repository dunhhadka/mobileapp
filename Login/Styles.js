import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const px = width / 414;
const height = Dimensions.get('window').height;
const Styles = StyleSheet.create({
  viewlogin: {
    position: 'absolute',
    alignSelf: 'center',
    width: 282 * px,
    height: 548 * px,
    marginTop: 70 * px,
    alignItems: 'center',
  },
  Babukids: {
    width: 148 * px,
    height: 128 * px,
  },
  textlogin: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#01B2FF',
    marginTop: 16 * px,
  },
  box: {
    marginTop: 20 * px,

    width: '100%',
  },
  textaccount: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#01B2FF',
    position:'absolute',
    top:-10*px
  },
  viewinput: {
    width: '100%',
    height: 48 * px,
    marginTop: 2 * px,
    borderBottomWidth: 1.5 * px,
    borderColor: '#01B2FF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lock: {
    width: 20 * px,
    height: 20 * px,
  },
  input: {
    flex: 1,
    marginLeft: 17.5 * px,
    height: '100%',
    color:'black'
  },
  foget: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: '#333333',
    marginLeft: 160 * px,
    marginTop: 20 * px,
    marginBottom: 25 * px,
  },
  choose: {
    width: 20 * px,
    height: 20 * px,
    marginRight: 5 * px,
  },
  rules: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: '#01B2FF',
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: '#333333',
  },
  volume: {
    width: 10 * px,
    height: 8 * px,
    position: 'absolute',
    marginLeft: 5 * px,
    marginTop: 5 * px,
  },
  login: {
    width: '100%',
    height: 44 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 16 * px,
    marginTop: 16 * px,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textlogin1: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  rooftop: {
    width: 15 * px,
    height: 7 * px,
    resizeMode: 'stretch',
    marginTop: 3 * px,
    marginLeft: 5 * px,
  },
  picture: {
    width,
    height: 216 * px,
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
   
  },
});
export default Styles;
