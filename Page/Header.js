import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Header = (props) => {
  const [all, setAll] = useState(1);
  const handle=(number)=>{
    if(number!=all)
    {
      setAll(number)
      props.chooseall(number)
    }
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20 * px,
      }}>
      <TouchableOpacity
        style={{...styles.box, backgroundColor: all==1 ? '#01B2FF' : '#DEDEDE'}}
        onPress={() => {
          handle(1)
        }}>
        <Image source={Images.boy} style={{...styles.boy,tintColor:all==1 ? '#fff' : '#828282'}} />
        <Text style={{...styles.text, color: all==1 ? '#fff' : '#828282'}}>
          Dành cho bé của bạn
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.box, backgroundColor: all==2 ? '#01B2FF' : '#DEDEDE'}}
        onPress={() => {
         handle(2)
        }}>
        <Image source={Images.Category} style={{...styles.boy,tintColor:all==2 ? '#fff' : '#828282'}} />
        <Text style={{...styles.text, color: all==2 ? '#fff' : '#828282'}}>
          Tất cả những bài viết
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',

    width: 183 * px,
    height: 36 * px,
    alignItems: 'center',
    paddingHorizontal: 10 * px,
    borderRadius: 20 * px,
  },
  boy: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 5 * px,
  },
});
