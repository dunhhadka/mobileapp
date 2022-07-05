import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Modalchoose = props => {
  const anima = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(anima, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, []);
  const choose = (text,image) => {
    props.chooseheader(text.toLocaleUpperCase(),image);
    props.closelist();
  };
  const array = [
    {
      image: Images.doc3,
      text: 'Theo tháng',
    },
    {
      image: Images.time,
      text: 'Theo tuần',
    },
  ];
  return (
    <Modal transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
      <TouchableOpacity style={{flex:1}} onPress={()=>{
        props.closelist();
      }}/>
        <Animated.View
          style={{
            width: 140 * px,
            height: 87 * px,
            backgroundColor: '#fff',
            borderTopLeftRadius: 15 * px,
            borderBottomRightRadius: 15 * px,
            borderBottomLeftRadius: 15 * px,
            position: 'absolute',
            right: 30 * px,
            top: 210 * px,
            opacity: anima.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}>
          {array.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20 * px,
                  alignItems: 'center',
                  marginTop: 17 * px,
                }}
                onPress={() => {
                  choose(item.text,item.image);
                }}
                key={index}>
                <Image
                  source={item.image}
                  style={{
                    width: 16 * px,
                    height: 16 * px,
                    resizeMode: 'stretch',
                    marginRight: 10 * px,
                  }}
                />
                <Text
                  style={{fontSize: 13 * px, fontWeight: '600', color: 'gray'}}>
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Modalchoose;

const styles = StyleSheet.create({});
