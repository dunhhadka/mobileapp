import {StyleSheet, Text, View, Image, TextInput,Dimensions} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const px = width / 414;
const height = Dimensions.get('window').height;
const Input = props => {
  return (
    <View style={Styles.box}>
      <View>
        <Text style={Styles.textaccount}>{props.text}</Text>
        <View style={Styles.viewinput}>
          <Image source={props.images} style={Styles.lock} />
          <TextInput
            style={Styles.input}
            secureTextEntry={props.images == Images.key ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

export default Input;

const Styles = StyleSheet.create({
  box: {
    marginTop: 20 * px,
    width: '100%',
  },
  textaccount: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#01B2FF',
    position: 'absolute',
    top: -10 * px,
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
    resizeMode:'stretch'
  },
  input: {
    flex: 1,
    marginLeft: 17.5 * px,
    height: '100%',
    color: 'black',
  },
});
