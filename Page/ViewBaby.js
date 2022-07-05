import {StyleSheet, Text, View, Dimensions, Image,TouchableOpacity} from 'react-native';
import React,{memo} from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
import Images from '../Images/Images';
const ViewBaby = (props) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={()=>{
      props.Goposts()
    }}
    >
      <View
        style={{
          width: 382 * px,
          height: 304 * px,
          borderRadius: 16 * px,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}>
        <Image source={Images.babyview} style={styles.picture} />
        <View style={{paddingHorizontal: 16 * px}}>
          <View style={styles.baby}>
            <Image source={Images.Group} style={styles.Group} />
            <Text style={styles.text}>Dạy trẻ tập đi</Text>
          </View>
          <Text style={styles.text1}>
            Các hoạt động trong giai đoạn đầu của trẻ thường rất quan trọng .
            Hãy chăm chỉ dạy trẻ.
          </Text>
          <Text style={styles.time}>06:00 pm 15 thg 3</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ViewBaby);

const styles = StyleSheet.create({
  container: {
    width,
    marginVertical:10*px,
    padding: 16 * px,
  },
  picture: {
    height: 184 * px,
    width: '100%',
    resizeMode: 'stretch',
  },
  baby: {
    flexDirection: 'row',

    marginTop: 10 * px,
  },
  Group: {
    width: 20 * px,
    height: 20 * px,
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
    marginLeft: 12 * px,
  },
  text1: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#333333',

    marginTop: 8 * px,
  },
  time: {
    fontWeight: '400',
    fontSize: 13 * px,
    color: '#828282',
    marginTop: 10 * px,
  },
});
