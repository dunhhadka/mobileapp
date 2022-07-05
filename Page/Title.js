import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React,{memo} from 'react';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Title = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.pen} />
      <Text style={styles.text}>{props.text}</Text>
      <TouchableOpacity onPress={()=>{
          props.Showlist()
      }}>
        <Image source={Images.Dos} style={styles.dos} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Title);

const styles = StyleSheet.create({
  container: {
    width,
    height: 48 * px,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16 * px,
  },
  pen: {
    width: 18 * px,
    height: 18 * px,
    resizeMode:'stretch'
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#333333',
    marginLeft: 12 * px,
    flex: 1,
  },
  dos: {
    width: 44 * px,
    height: 44 * px,
    resizeMode: 'stretch',
  },
});
