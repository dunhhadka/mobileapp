import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../Images/Images';
import ViewBaby from '../../ViewBaby';
import Toy from './Toy';
import Toymonth from './Toymonth';
import Title from '../../Title';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Content = ({navigation}) => {
  const [exam, setExam] = useState(true);
  const [Toy1, settoy] = useState(false);
  const TextIcon = props => {
    return (
      <View style={{flexDirection: 'row', marginTop: 20 * px}}>
        <Image
          source={props.image}
          style={{...styles.smile, tintColor: '#01B2FF'}}
        />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    );
  };

  const Title = props => {
    return (
      <View style={{flexDirection: 'row', marginTop: 37 * px}}>
        <Image source={props.image} style={styles.smile} />
        <Text style={styles.textone}>{props.text}</Text>
      </View>
    );
  };
  const closemonth = () => {
    settoy(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
          >
            <Image
              source={Images.Frame1}
              style={{...styles.goback, tintColor: '#fff'}}
            />
          </TouchableOpacity>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.name}>BÉ NANA</Text>
              <Image source={Images.vector} style={styles.vector} />
            </View>
            <Text style={styles.age}>12 tháng tuổi</Text>
          </View>
          <Image source={Images.baby} style={styles.baby} />
        </View>
        <View style={{justifyContent: 'center', top: -20 * px}}>
          <Image source={Images.screen} style={styles.kiss} />
          <Image source={Images.Play} style={styles.play} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 16 * px,
            marginTop: 25 * px,
          }}>
          <View style={styles.knot}>
            <Image
              source={Images.check}
              style={{...styles.check, tintColor: '#fff'}}
            />
            <Text style={styles.finish}>Hoàn thành</Text>
          </View>
          <View style={{...styles.knot, backgroundColor: '#DEDEDE'}}>
            <Image
              source={Images.send}
              style={{...styles.send, tintColor: '#fff'}}
            />
            <Text style={styles.finish}>Dễ dàng</Text>
          </View>
          <View style={{...styles.knot, backgroundColor: '#DEDEDE'}}>
            <Image
              source={Images.Danger}
              style={{...styles.send, tintColor: '#fff'}}
            />
            <Text style={styles.finish}>Khó khăn</Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 16 * px}}>
          <View style={styles.title}>
            <Image source={Images.smile} style={styles.smile} />
            <Text style={styles.text}>Dạy trẻ tập đi</Text>
            <Image source={Images.Heart} style={styles.heart} />
            <Image
              source={Images.danger1}
              style={{...styles.heart, marginLeft: 16 * px}}
            />
          </View>
          <Text style={styles.textheader}>
            Dạy trẻ tập đi thường phương pháp A-Walking III
          </Text>
          <View style={styles.body}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15 * px,
              }}>
              <TouchableOpacity
                style={{
                  ...styles.namebox,
                  backgroundColor: exam ? '#F26091' : '#fff',
                }}
                onPress={() => {
                  setExam(!exam);
                }}>
                <Text
                  style={{...styles.nameone, color: exam ? '#fff' : '#828282'}}>
                  THÔNG TIN BÀI TẬP
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.namebox,
                  backgroundColor: !exam ? '#0094FF' : '#fff',
                }}
                onPress={() => {
                  setExam(!exam);
                }}>
                <Text
                  style={{
                    ...styles.nameone,
                    color: !exam ? '#fff' : '#828282',
                  }}>
                  ĐỒ CHƠI
                </Text>
              </TouchableOpacity>
            </View>
            {exam && (
              <View>
                <Title image={Images.pen} text="Mục tiêu bài học" />
                <TextIcon image={Images.smile} text="Dạy trẻ tập đi" />
                <TextIcon image={Images.smile} text="Dạy trẻ tập đi" />
                <Title image={Images.pen} text="Mô tả chi tiết" />
                <Text
                  style={{
                    fontSize: 13 * px,
                    fontWeight: '400',
                    color: '#828282',
                    textAlign: 'justify',
                    lineHeight: 25 * px,
                    marginTop: 20 * px,
                  }}>
                  Hình ảnh hồn nhiên, trong trẻo của các em nhỏ vùng cao hiện
                  lên trong từng hoạt động sống thường ngày cũng khiến nhiều
                  người xốn xang khi đặt chân đến miền sơn cước. Trước đó, dân
                  mạng cũng từng ngẩn ngơ trước hình ảnh em bé Tỏ (sống ở bản
                  Lao Chải San, thuộc huyện Sa Pa, Lào Cai) khi sở hữu nụ cười
                  tươi tắn hồn nhiên. Bức ảnh lập tức "gây bão", những người xem
                  còn thốt lên "Xinh đẹp quá!".
                </Text>
                <Title image={Images.game} text="Đồ chơi theo tháng" />
                <Text
                  style={{
                    fontSize: 13 * px,
                    fontWeight: '400',
                    color: '#828282',
                    textAlign: 'justify',
                    lineHeight: 25 * px,
                    marginTop: 20 * px,
                  }}>
                  Hình ảnh hồn nhiên, trong trẻo của các em nhỏ vùng cao hiện
                  lên trong từng hoạt động sống thường ngày cũng khiến nhiều
                  người xốn xang khi đặt chân đến miền sơn cước. Trước đó, dân
                  mạng cũng từng ngẩn ngơ trước hình ảnh em bé Tỏ (sống ở bản
                  Lao Chải San, thuộc huyện Sa Pa, Lào Cai) khi sở hữu nụ cười
                  tươi tắn hồn nhiên. Bức ảnh lập tức "gây bão", những người xem
                  còn thốt lên "Xinh đẹp quá!".
                </Text>
                <TouchableOpacity
                  style={{
                    height: 44 * px,
                    backgroundColor: '#01B2FF',
                    borderRadius: 20 * px,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40 * px,
                  }}
                  onPress={() => {
                    settoy(true);
                  }}>
                  <Text
                    style={{
                      fontSize: 13 * px,
                      fontWeight: '600',
                      color: '#fff',
                    }}>
                    XEM ĐỒ CHƠI CỦA BÉ TRONG THÁNG
                  </Text>
                </TouchableOpacity>
                <Title image={Images.pen} text="Bài viết liên quan" />
                <View>
                  <ScrollView horizontal>
                    <ViewBaby />
                    <ViewBaby />
                    <ViewBaby />
                  </ScrollView>
                </View>
              </View>
            )}
            {!exam && <Toy />}
          </View>
          {Toy1 && <Toymonth closemonth={closemonth} />}
        </View>
      </ScrollView>
    </View>
  );
};

export default Content;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16 * px,
    backgroundColor: '#01B2FF',
    height: 100 * px,
    paddingTop: 10 * px,
  },
  goback: {
    width: 40 * px,
    height: 40 * px,
  },
  name: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#fff',
  },
  age: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#fff',
  },
  vector: {
    width: 10 * px,
    height: 5 * px,
    resizeMode: 'stretch',
  },
  baby: {
    width: 44 * px,
    height: 44 * px,
    borderRadius: 22 * px,
  },
  kiss: {
    width: '100%',
    height: 210 * px,
    resizeMode: 'stretch',
  },
  play: {
    position: 'absolute',
    width: 52 * px,
    height: 52 * px,
    alignSelf: 'center',
  },
  knot: {
    width: 117 * px,
    height: 36 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 20 * px,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10 * px,
  },
  check: {
    width: 40 * px,
    height: 40 * px,
  },
  finish: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    position: 'absolute',
    left: 35 * px,
  },
  send: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24 * px,
  },
  smile: {
    width: 20 * px,
    height: 20 * px,
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
    marginLeft: 12 * px,
    flex: 1,
  },

  heart: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  textheader: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: 'black',
    marginTop: 16 * px,
  },
  body: {
    borderTopWidth: 0.5 * px,
    borderColor: '#01B2FF',
    marginTop: 24 * px,
  },
  namebox: {
    width: 183 * px,
    backgroundColor: '#F26091',
    borderTopRightRadius: 8 * px,
    borderTopLeftRadius: 8 * px,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40 * px,
    elevation: 2 * px,
  },
  nameone: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#fff',
  },
  textone: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: 'black',
    marginLeft: 12 * px,
  },
});
