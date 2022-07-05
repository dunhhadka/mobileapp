import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Title from '../Title';
import AlertAll from './AlertAll';
import Images from '../../Images/Images';
import Allage from './Allage';
import Allcategory from './Allcategory';
import Alllocation from './Alllocation';
const Allactivity = (props) => {
  const [name, setname] = useState('THEO DANH MỤC');
  const [icon, setIcon] = useState(Images.doc3);
  const [show, setshow] = useState(false);
  const Showlist = () => {
    setshow(true);
  };
  const close=()=>{
     setshow(false);
  }
  const closelist = (name, images) => {
    setname(name);
    setIcon(images);
    setshow(false);
  };
  const nextpage=()=>{
     props.next()
  }
  const showview=()=>{
     switch (name){
          case 'THEO DANH MỤC':{
               return(
                    <Allcategory next={nextpage}/>
               )
          }
          case 'THEO ĐỊA ĐIỂM':{
               return(
                    <Alllocation next={nextpage}/>
               )
          }
          case 'THEO TUỔI':{
               return(
                    <Allage next={nextpage}/>
               )
          }
     }
  }
  return (
    <View>
      <Title text={name} image={icon} Showlist={Showlist} />
      {showview()}
      {show && <AlertAll closelist={closelist}  close={close}/>}
    </View>
  );
};

export default Allactivity;

const styles = StyleSheet.create({});
