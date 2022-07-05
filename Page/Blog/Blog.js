import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React,{useState} from 'react';
import Backgound from '../Backgound';
import Title from '../Title';
import ViewBaby from '../ViewBaby';
import Header from '../Header';
import Images from '../../Images/Images';
import ModalAdd from '../Home/ModalAdd';
import Drawer from '../Home/Drawer';
const Blog = ({navigation}) => {
  const [showmodal,setShowmodal]=useState(false)
  const [showdrawe,setShowdrawer]=useState(false)
  const nextpage=()=>{
    navigation.navigate('Edit')
  }
  const show=()=>{
    setShowmodal(true)
  }
  const hidden=()=>{
    setShowmodal(false)
    navigation.navigate('Add')
  }
  const showDrawer=()=>{
    setShowdrawer(true)
  }
  const closeDrawer=()=>{
    setShowdrawer(false)
  }
  const logout=()=>{
    navigation.navigate('Login')
  }
  const Showlist=()=>{

  }
  const Goposts=()=>{
    navigation.navigate('Posts')
  }
  const closeadd=()=>{
    setShowmodal(false)
  }
  const chooseall=()=>{

  }
  const gotoedit=()=>{
    setShowmodal(false)
    navigation.navigate('Edit')
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          <Backgound nextpage={nextpage} show={show} showDrawer={showDrawer}/>
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              bottom: 0,
              borderTopLeftRadius:10,
              borderTopRightRadius:10
            }}>
            <Header chooseall={chooseall}/>
            <Title text='BÀI ViẾT' image={Images.pen} Showlist={Showlist}/>
          </View>
        </View>
        <View style={styles.body}>
          <ViewBaby  Goposts={Goposts}/>
          <ViewBaby  Goposts={Goposts}/>
          <ViewBaby  Goposts={Goposts}/>
          <ViewBaby  Goposts={Goposts}/>
          <ViewBaby  Goposts={Goposts}/>
          <ViewBaby  Goposts={Goposts}/>
          <View style={{height: 100}} />
        </View>
      </ScrollView>
      {showmodal&&<ModalAdd hidden={hidden} closeadd={closeadd} gotoedit={gotoedit}/>}
      {showdrawe&&<Drawer closeDrawer={closeDrawer} logout={logout}/>}
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  body: {
    borderRadius: 10,
    backgroundColor:'#fff'
  },
});
