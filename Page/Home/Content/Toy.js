import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Images/Images';
import Alert from './Alert';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Toy = props => {
  console.log(2);
  const [show, setshow] = useState(false);
  const close = () => {
    setshow(false);
  };

  const Box = () => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          setshow(true);
        }}>
        <Image source={Images.afrog} style={styles.afrog} />
        <View style={{marginLeft: 10 * px}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 16 * px,
            }}>
            <Image
              source={Images.Glisser}
              style={{...styles.glisser, tintColor: '#01B2FF'}}
            />
            <Text style={styles.text}>Vận động tinh</Text>
          </View>
          <Text style={styles.content}>
            Ếch thổi kèn - Bổ trợ kỹ năng di chuyển
          </Text>
        </View>
        {show && <Alert close={close} />}
      </TouchableOpacity>
    );
  };
  const array = [1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View>
      {array.map((item, index) => {
        return <Box key={index} />;
      })}
    </View>
  );
};

export default Toy;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    borderRadius: 16 * px,
    marginTop: 24 * px,
    shadowColor: '#000',

    height: 100 * px,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1 * px,
  },
  afrog: {
    width: 110 * px,
    height: 94 * px,
    resizeMode: 'stretch',
  },
  glisser: {
    width: 20 * px,
    height: 15 * px,
    marginTop: 10 * px,
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: 'gray',
    marginLeft: 13 * px,
  },
  content: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#333333',
    marginTop: 8 * px,
  },
});
