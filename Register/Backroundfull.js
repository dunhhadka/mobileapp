import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import Backgound from '../Greeting/Backgound';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Backroundfull = (props) => {
  return (
    <View>
      <Backgound />
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          marginTop: 80 * px,
          alignItems: 'center',
          paddingHorizontal: 16 * px,
        }}>
        <Image
          source={Images.Babukids}
          style={{width: 148 * px, height: 128 * px}}
        />
        <Text style={{ fontSize: 15 * px,
          fontWeight: '700',
          color: '#01B2FF',
          marginTop: 16 * px,}}>{props.text}</Text>
      </View>
      <Image
        source={Images.picture}
        style={{
          width,
          height: 216 * px,
          position: 'absolute',
          bottom: 0,
          resizeMode: 'stretch',
        }}
      />
    </View>
  );
};

export default Backroundfull;

const styles = StyleSheet.create({});
