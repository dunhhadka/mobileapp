import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Edit = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#01B2FF'}}>
      <View style={styles.header}>
        <Text style={styles.textheader}>CHỈNH SỬA THÔNG TIN BÉ</Text>
        <Text style={styles.name}>BÉ SCHOOLING</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.info}>
          <Image source={Images.baby} style={styles.baby} />
          <View style={styles.box}>
            <View style={styles.sex}>
              <Image source={Images.boy} style={styles.boy} />
              <Text style={styles.gt}>Bé trai</Text>
            </View>
            <View style={{...styles.sex, backgroundColor: '#DEDEDE'}}>
              <Image
                source={Images.girl}
                style={{...styles.boy, tintColor: 'gray'}}
              />
              <Text style={{...styles.gt, color: 'gray'}}>Bé gái</Text>
            </View>
          </View>
          <View style={styles.change}>
            <Text style={styles.textchange}>Thay ảnh</Text>
          </View>
        </View>
        <View style={styles.input}>
          <Image source={Images.lock} style={styles.lock} />
          <TextInput />
          <Text style={styles.text}>Họ Tên hoặc Tên hay gọi của bé</Text>
        </View>
        <View style={styles.input}>
          <Image source={Images.key} style={styles.lock} />
          <TextInput />
          <Text style={styles.text}>Ngày sinh của bé</Text>
        </View>
        <View style={styles.yes}>
          <Image source={Images.check} style={styles.check} />
          <Text style={styles.textyes}>Con bạn sinh non </Text>
        </View>
        <View style={styles.input}>
          <Image source={Images.key} style={styles.lock} />
          <TextInput />
          <Text style={styles.text}>Số tuần sinh</Text>
        </View>
        <View style={styles.input}>
          <Image source={Images.key} style={styles.lock} />

          <TextInput />
          <Text style={styles.text}>Bạn là</Text>
        </View>
        <TouchableOpacity style={styles.knot}
        onPress={()=>{
          navigation.navigate('Index')
        }}
        >
          <Text style={styles.update}>Update</Text>
          <Image source={Images.rooftop} style={styles.rooftop} />
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.knot, backgroundColor: '#DEDEDE'}}
        onPress={()=>{
          navigation.navigate('Index')
        }}
        >
          <Text style={{...styles.update, color: 'gray'}}>Delete</Text>
          <Image
            source={Images.rooftop}
            style={{...styles.rooftop, tintColor: 'gray'}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{position: 'absolute', right: 24 * px, top: 45 * px}}
        onPress={()=>{
          navigation.goBack()
        }}
        >
        <Image
          source={Images.Close}
          style={{
            width: 20 * px,
            height: 20 * px,
            resizeMode: 'stretch',
            tintColor: '#fff',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 40 * px,
  },
  textheader: {
    fontSize: 17 * px,
    fontWeight: '700',
    color: '#fff',
  },

  name: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#fff',
  },

  body: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 24 * px,
    borderTopRightRadius: 15 * px,
    borderTopLeftRadius: 15 * px,
    paddingHorizontal: 66 * px,
  },
  info: {
    height: 125 * px,
    flexDirection: 'row',
    marginTop: 24 * px,
  },
  baby: {
    height: '100%',
    width: 125 * px,
    resizeMode: 'stretch',
  },
  sex: {
    flexDirection: 'row',
    width: 117 * px,
    height: 36 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 20 * px,
    alignItems: 'center',
    paddingHorizontal: 15 * px,
  },
  boy: {
    width: 18 * px,
    height: 18 * px,
    resizeMode: 'stretch',
  },
  gt: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 16 * px,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16 * px,
    justifyContent: 'space-between',
  },
  change: {
    position: 'absolute',
    width: 125 * px,
    height: 37 * px,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 20 * px,
    bottom: 0,
  },
  textchange: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#01B2FF',
  },
  input: {
    borderBottomWidth: 0.5 * px,
    borderColor: '#01B2FF',
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 20 * px,
  },
  lock: {
    width: 18 * px,
    height: 18 * px,
    resizeMode: 'stretch',
    marginRight: 17 * px,
  },
  text: {
    position: 'absolute',
    top: -8 * px,
    fontWeight: '400',
    fontSize: 13 * px,
    color: '#01B2FF',
  },
  yes: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24 * px,
  },
  check: {
    width: 40 * px,
    height: 40 * px,
  },
  textyes: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: 'black',
    borderBottomWidth: 0.5 * px,
  },
  knot: {
    width: 282 * px,
    height: 44 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 16 * px,
    marginTop: 24 * px,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rooftop: {
    width: 14 * px,
    height: 6 * px,
    resizeMode: 'stretch',
    marginLeft: 20 * px,
  },
  update: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#fff',
  },
});
