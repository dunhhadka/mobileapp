import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;

const StylesHome = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#01B2FF',
  },
  header: {
    height: 470 * px,
    width,
    alignSelf: 'center',
    top:-140*px
  },
  list: {
    width: 382 * px,
    paddingHorizontal: 16 * px,
    backgroundColor: '#fff',
    borderRadius: 20 * px,
    marginHorizontal: 16 * px,
    elevation: 10 * px,
  },
  dos: {
    flexDirection: 'row',
    alignSelf: 'center',
    top:-120*px
  },
  textdos1: {
    fontSize: 7 * px,
    color: '#01B2FF',
    marginHorizontal: 4 * px,
  },
  textdos2: {
    fontSize: 7 * px,
    color: '#DEDEDE',
    marginHorizontal: 4 * px,
  },
  title: {
    flexDirection: 'row',
  },
  endow: {
    flexDirection: 'row',
    marginBottom:30*px,
    paddingHorizontal: 16 * px,
    alignItems: 'center',
  },
  ticket: {
    width: 20 * px,
    height: 16 * px,
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#333333',
    marginLeft: 12 * px,
  },
  picture:{
    width,
    height:200,
    marginTop:50*px,
    resizeMode:'stretch',
    marginBottom:200*px
  }
});
export default StylesHome;
