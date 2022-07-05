import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import Images from '../../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Indexupdate = props => {
  const anima = useRef(new Animated.Value(0)).current;
  const Map = [
    {
      title: 'Ngày cập nhật',
      image: Images.Datetwo,
      color: '#01B2FF',
      unit: '',
    },
    {
      title: 'Chiều cao',
      image: Images.height,
      color: '#FF6188',
      unit: 'Cm',
    },
    {
      title: 'Cân nặng',
      image: Images.Groupone,
      color: '#0038FF',
      unit: 'Kg',
    },
    {
      title: 'Chỉ số vòng đầu',
      image: Images.Scan,
      color: '#FF7A00',
      unit: 'Cm',
    },
  ];
  useEffect(() => {
    Animated.timing(anima, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Modal transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.2)'}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => {
            props.close();
          }}
        />
        <Animated.View
          style={{
            ...styles.container,
            top: anima.interpolate({
              inputRange: [0, 1],
              outputRange: [1000 * px, 0 * px],
            }),
          }}>
          <View style={styles.header}>
            <Image source={Images.Chart} style={styles.chart} />
            <Text style={styles.text}>CẬP NHÂP CHỈ SỐ</Text>
          </View>
          {Map.map((item, index) => {
            return (
              <View
                style={{...styles.input, borderColor: item.color}}
                key={index}>
                <Image
                  source={item.image}
                  style={{...styles.date, tintColor: item.color}}
                />
                <TextInput style={{color: item.color}} />
                <Text style={{...styles.title, color: item.color}}>
                  {item.title}
                </Text>
                <Text
                  style={{color: item.color, position: 'absolute', right: 0,fontSize:12}}>
                  {item.unit}
                </Text>
              </View>
            );
          })}
          <TouchableOpacity
            style={{...styles.knot, backgroundColor: '#01B2FF'}}>
            <Text style={styles.text1}>Cập nhật</Text>
            <Image source={Images.rooftop} style={styles.rooftop} />
          </TouchableOpacity>
          <Image source={Images.picture} style={styles.picture} />
          <TouchableOpacity
            style={{position: 'absolute', right: 24 * px, top: 24 * px}}
            onPress={() => {
              props.close();
            }}>
            <Image source={Images.Close} style={styles.close} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default Indexupdate;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height - 80,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15 * px,
    borderTopRightRadius: 15 * px,
    paddingHorizontal: 30 * px,
    paddingTop: 25 * px,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chart: {
    width: 20 * px,
    height: 20 * px,
  },
  text: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#F26091',
    marginLeft: 12 * px,
  },
  input: {
    flexDirection: 'row',
    borderBottomWidth: 0.5 * px,
    alignItems: 'center',
    marginTop: 30 * px,
  },
  date: {
    width: 18 * px,
    height: 18 * px,
    resizeMode: 'stretch',
    marginRight: 10 * px,
  },
  title: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: 'black',
    position: 'absolute',
    top: -10 * px,
  },
  text1: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#fff',
  },
  rooftop: {
    width: 14 * px,
    height: 6 * px,
    resizeMode: 'stretch',
    marginLeft: 10 * px,
    marginTop: 5 * px,
  },
  knot: {
    width: 282 * px,
    height: 44 * px,
    borderRadius: 16 * px,
    marginTop: 40 * px,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width,
    height: 200 * px,
    resizeMode: 'stretch',
    marginTop: 10 * px,
    right: 30 * px,
  },
  close: {
    width: 20 * px,
    height: 20 * px,
  },
});
