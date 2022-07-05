import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Posts = ({navigation}) => {
  const ViewBaby=()=>{
    return(
      <TouchableOpacity style={styles.viewbaby}>
        <Image source={Images.babyview} style={styles.baby}/>
        <View style={{flex:1,paddingHorizontal:10*px}}>
          <View style={{flexDirection:'row',marginTop:6*px}}>
            <Image source={Images.Group} style={styles.Group1}/>
            <Text style={styles.textview}>Dạy trẻ tập đi</Text>
          </View>
          <Text style={styles.Text}>Các hoạt động trong giai đoạn đầu của trẻ</Text>
          <Text style={styles.Time}>06:00 pm 15 thg 3</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <ScrollView>
        <Image source={Images.babytwo} style={styles.header} />
        <View style={styles.body}>
          <View style={styles.title}>
            <Image source={Images.Group} style={styles.Group} />
            <Text style={styles.textheader}>Dạy bé tập đi</Text>
          </View>
          <Text
            style={{
              fontSize: 15 * px,
              fontWeight: '600',
              color: '#333333',
              lineHeight: 25 * px,
            }}>
            Các hoạt động trong giai đoạn đầu của trẻ thường rất quan trọng .Hãy
            chăm chỉ dạy bé
          </Text>
          <Text style={styles.time}>06:00 pm 15thg3</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Dù chỉ mới 10 tuổi, nhưng cô bé đã sở hữu nét đẹp nổi bật, rạng ngời
            khiến nhiều người trầm trồ. Dẫu cuộc sống còn nhiều vất vả, nhưng
            trên môi của cô bé vẫn giữ được nụ cười tươi tắn, ánh mắt rạng rỡ
            ngây thơ như làm sáng rực cả một vùng núi rừng đại ngàn xanh tươi.
          </Text>
          <Text style={styles.text}>
            {' '}
            Hình ảnh hồn nhiên, trong trẻo của các em nhỏ vùng cao hiện lên
            trong từng hoạt động sống thường ngày cũng khiến nhiều người xốn
            xang khi đặt chân đến miền sơn cước. Trước đó, dân mạng cũng từng
            ngẩn ngơ trước hình ảnh em bé Tỏ (sống ở bản Lao Chải San, thuộc
            huyện Sa Pa, Lào Cai) khi sở hữu nụ cười tươi tắn hồn nhiên. Bức ảnh
            lập tức "gây bão", những người xem còn thốt lên "Xinh đẹp quá!".
          </Text>
          <Text style={styles.text}>
            Hình ảnh hồn nhiên, trong trẻo của các em nhỏ vùng cao hiện lên
            trong từng hoạt động sống thường ngày cũng khiến nhiều người xốn
            xang khi đặt chân đến miền sơn cước. Trước đó, dân mạng cũng từng
            ngẩn ngơ trước hình ảnh em bé Tỏ (sống ở bản Lao Chải San, thuộc
            huyện Sa Pa, Lào Cai) khi sở hữu nụ cười tươi tắn hồn nhiên. Bức ảnh
            lập tức "gây bão", những người xem còn thốt lên "Xinh đẹp quá!".
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Images.pen} style={styles.pen} />
            <Text style={styles.text1}>Bài viết liên quan</Text>
          </View>
          <View>
            <ScrollView horizontal>
              <ViewBaby />
              <ViewBaby />
              <ViewBaby />
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity style={styles.goback} onPress={()=>{
          navigation.goBack()
        }}>
          <Image source={Images.Frame1} style={styles.frame} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  Time:{
    fontSize:11*px,
    fontWeight:'400',
    color:'#828282',
    bottom:-10*px
  },
  Text:{
    fontSize:10*px,
    fontWeight:'600',
    color:'#333',
    marginTop:2*px,
  
  },
  textview:{
    fontSize:11*px,
    fontWeight:'400',
    color:'#828282',
    marginLeft:8*px
  },
  Group1:{
    width:13*px,
    height:13*px,
    resizeMode:'stretch'
  },
  baby:{
    width:'100%',
    height:114*px,
    resizeMode:'stretch'
  },  
  viewbaby:{
    width:249*px,
    height:191*px,
    marginRight:16*px,
    borderRadius:16*px,
    backgroundColor:"#fff"
  },
  header: {
    width,
    height: 314 * px,
    borderRadius: 16 * px,
  },
  title: {
    flexDirection: 'row',
  },
  Group: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
  },
  body: {
    padding: 16 * px,
    borderTopLeftRadius: 25 * px,
    borderTopRightRadius: 25 * px,
    width,

    top: -100 * px,
    backgroundColor: '#E5E5E5',
  },
  textheader: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
    marginLeft: 13 * px,
  },
  time: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
    marginTop: 20 * px,
  },
  content: {
    top: -100 * px,
    borderTopWidth: 0.3 * px,
    borderColor: 'grayf',
    marginHorizontal: 16 * px,
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: 'black',
    textAlign: 'justify',
    lineHeight: 25 * px,
    marginVertical: 20 * px,
  },
  pen: {
    width: 16 * px,
    height: 16 * px,
    marginRight: 10 * px,
  },
  text1: {
    fontSize: 15 * px,
    fontWeight: '600',
    color: '#333333',
  },
  frame: {
    width: 44 * px,
    height: 44 * px,
    
  },
  goback: {
    position: 'absolute',
    elevation:10*px,
    top:52*px,
    left:16*px
  },
});
