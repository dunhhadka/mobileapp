import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Styles from './Styles';
import Images from '../../Images/Images';
import Input from './Input';
import Knot from './Knot';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Infomation = ({navigation}) => {
  const [showcheck,setShowcheck]=useState(false)
  const [gt1,setGt1]=useState(true)
  const [gt2,setGt2]=useState(true)
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.textheader}>THÔNG TIN BÉ</Text>
        <Text style={Styles.text}>Cập nhật thông tin bé</Text>
      </View>
      <View style={Styles.body}>
        <View style={Styles.viewavatar}>
          <Image source={Images.baby} style={Styles.baby} />
          <View style={Styles.boxgt}>
            <TouchableOpacity style={{...Styles.gt, backgroundColor:gt1?'#01B2FF':'#DEDEDE'}}
            onPress={()=>{
              setGt1(!gt1)
            }}
            >
              <Image source={Images.boy} style={Styles.boy} />
              <Text>Bé trai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...Styles.gt,backgroundColor:!gt2?'#01B2FF':'#DEDEDE'}}
            onPress={()=>{
              setGt2(!gt2)
            }}
            >
              <Image source={Images.girl} style={Styles.boy} />
              <Text>Bé Gái</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Input text="Họ Tên hoặc Tên hay gọi của bé" images={Images.lock} />
        <Input text="Ngày sinh của bé" images={Images.date} />
        <View style={styles.note}>
          <TouchableOpacity onPress={()=>{
            setShowcheck(!showcheck)
          }}>
            {showcheck&&<View style={styles.square1}>
              <Image source={Images.volume} style={styles.check}/>
            </View>}
            {(!showcheck)&&<View style={styles.square}/>}
          </TouchableOpacity>
          <View style={styles.viewtext}>
            <Text style={styles.text}>Con bạn sinh non?</Text>
          </View>
        </View>
        {showcheck&&<Input text='Số tuần sinh'images={Images.date}/>}
        <Input text="Bạn là" images={Images.twouser} />
        <TouchableOpacity style={styles.end} onPress={()=>{
          navigation.navigate('Page')
        }}>
          <Knot text='Xong'/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Infomation;

const styles = StyleSheet.create({
  note: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 28 * px,
  },
  square: {
    width: 20 * px,
    height: 20 * px,
    borderWidth: 1 * px,
    borderRadius: 4 * px,
    borderColor: '#828282',
    marginRight: 9 * px,
  },
  square1: {
    width: 20 * px,
    height: 20 * px,
    borderWidth: 1 * px,
    borderRadius: 4 * px,
    borderColor: '#01B2FF',
    marginRight: 9 * px,
    alignItems:'center',
    justifyContent:'center'
  },
  text: {
    fontSize: 15 * px,
    fontWeight: '400',
    color: '#333333',
  },
  viewtext:{
    borderBottomWidth:1*px,
    borderColor:'#333333',
    justifyContent:'flex-end'
  },
  end:{
    marginTop:40*px
  },
  check:{
    width:10*px,height:8*px,

    resizeMode:'stretch'
  }
});
