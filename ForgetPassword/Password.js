import { StyleSheet, Text, View ,TouchableOpacity,Dimensions} from 'react-native'
import React,{useState} from 'react'
import Backroundfull from '../Register/Backroundfull'
import Knot from '../Register/Knot'
import Input from '../Register/Input'
import Images from '../Images/Images'
import ModalSucess from '../Page/Change/ModalSucess'
const width = Dimensions.get('window').width;
const px = width / 414;
const Password = ({navigation}) => {
  const [show,setShow]=useState(false)
  const close=()=>{
    setShow(false)
  }
  const GoLogin=()=>{
    navigation.navigate('Login')
  }
  return (
    <View>
      <Backroundfull text='NHẬP LẠI MẬT KHẨU'/>
      <View style={{position:'absolute',alignSelf:'center',marginTop:270*px}}>
          <Input images={Images.key} text='Nhập lại mật khẩu mới'/>
          <Input images={Images.key} text='Nhập lại mật khẩu mới'/>
          <TouchableOpacity style={{marginTop:40*px}}
          onPress={()=>{
            setShow(true)
          }}
          >
               <Knot text='Xác nhân'/>
          </TouchableOpacity>
      </View>
      {show&&<ModalSucess close={close} GoLogin={GoLogin}/>}
    </View>
  )
}

export default Password

const styles = StyleSheet.create({})