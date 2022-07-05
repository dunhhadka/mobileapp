import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {memo} from 'react';
import Pie from 'react-native-pie';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const List = props => {
  const showbuyone = image => {
    if (image == Images.lock2) {
      props.showbuy();
    } else {
      props.goContent();
    }
  };
  const Iconlist = props => {
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => {
          showbuyone(props.image);
        }}>
        <View style={{...styles.Icon, backgroundColor: props.color}} />
        <Image
          source={props.icon}
          style={{...styles.Icon1, tintColor: '#fff'}}
        />
        <Text
          style={props.image == Images.lock2 ? styles.fon2 : styles.iconname}>
          {props.text}
        </Text>
        <Image
          source={props.image}
          style={props.image == Images.lock2 ? styles.lock2 : styles.vector}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{height: '100%'}}>
      <View style={styles.header}>
        <Image source={Images.book} style={styles.book} />
        <View style={styles.boxtext}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>CHƯƠNG TRÌNH </Text>
            <Text style={styles.text2}>: HÔM NAY</Text>
          </View>
          <Text style={styles.text3}>7 bài tập chưa hoàn thành </Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Pie
            radius={20}
            innerRadius={15}
            sections={[
              {
                percentage: 46,
                color: '#01B2FF',
              },
            ]}
            backgroundColor="#DEDEDE"
          />
          <Text style={styles.percent}>46%</Text>
        </View>
      </View>
      <Iconlist
        color="#D57BFF"
        text="Vận động thô"
        image={Images.vector2}
        icon={Images.motor}
      />
      <Iconlist
        color="#0038FF"
        text="Vận động tinh"
        image={Images.vector2}
        icon={Images.Glisser}
      />
      <Iconlist
        color="#5FFF95"
        text="Nhận thức"
        image={Images.lock2}
        icon={Images.toddler}
      />
      <Iconlist
        color="#FF7A00"
        text="Ngôn ngữ"
        image={Images.lock2}
        icon={Images.languge}
      />
      <Iconlist
        color="#00A3FF"
        text="Giác quan"
        image={Images.lock2}
        icon={Images.eye}
      />
      <Iconlist
        color="#D57BFF"
        text="Tự lập"
        image={Images.lock2}
        icon={Images.brush}
      />
      <Iconlist
        color="#D57BFF"
        text="Cảm xúc xã hội"
        image={Images.lock2}
        icon={Images.twobaby}
      />
    </View>
  );
};

export default memo(List);

const styles = StyleSheet.create({
  header: {
    height: 70 * px,
    borderColor: '#01B2FF',
    borderBottomWidth: 0.5 * px,
    flexDirection: 'row',
    alignItems: 'center',
  },
  book: {
    width: 16.25 * px,
    height: 16 * px,
    resizeMode: 'stretch',
  },
  boxtext: {
    marginLeft: 10 * px,
    flex: 1,
  },
  text1: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#333333',
  },
  text2: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#01B2FF',
  },
  text3: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
  },
  circle: {
    width: 44 * px,
    height: 44 * px,
    borderRadius: 22 * px,
    borderWidth: 5 * px,
    borderColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent: {
    fontSize: 11 * px,
    fontWeight: '700',
    color: '#333333',
    position:'absolute',
  },
  list: {
    height: 56 * px,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#01B2FF',
    borderBottomWidth: 0.5 * px,
  },
  Icon: {
    width: 40 * px,
    height: 40 * px,

    borderRadius: 8 * px,
  },
  Icon1: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
    position: 'absolute',
    marginLeft: 10 * px,
  },
  iconname: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 16 * px,
    flex: 1,
  },
  vector: {
    width: 6 * px,
    height: 12 * px,
    resizeMode: 'stretch',
  },
  lock2: {
    width: 17.5 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  fon2: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#828282',
    marginLeft: 16 * px,
    flex: 1,
  },
  ratio: {
    backgroundColor: 'red',
    width: 44 * px,
    height: 10 * px,
    borderRadius: 22 * px,
    position: 'absolute',
  },
});
