import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StylesHome from './StylesHome';
import Backgound from '../Backgound';
import Title from '../Title';
import List from './List';
import ViewBaby from '../ViewBaby';
import Images from '../../Images/Images';
import Endow from '../Endow';
import ModalAdd from './ModalAdd';
import ModalPay from './ModalPay';
import Drawer from './Drawer';
import Buying from './Buying';
const Home = ({navigation}) => {
  const Lists = [1, 1, 1, 1, 1];
  const [showmodal, setShowmodal] = useState(false);
  const [indexs, setIndexs] = useState(0);
  const [showpay, setshowpay] = useState(false);
  const [showdrawe, setShowdrawer] = useState(false);
  const [buyding, setBuyding] = useState(false);

  const handlescroll = e => {
    setIndexs(Math.floor((e + 250) / 414));
  };
  const nextpage = () => {
    navigation.navigate('Edit');
  };

  const logout = () => {
    navigation.navigate('Login');
  };
  const show = () => {
    setShowmodal(true);
  };
  const hidden = () => {
    setShowmodal(false);
    navigation.navigate('Add');
  };
  const Pay = () => {
    setshowpay(true);
  };
  const closemodalpay = () => {
    setshowpay(false);
  };
  const Goposts = () => {
    navigation.navigate('Posts');
  };
  const showDrawer = () => {
    setShowdrawer(true);
  };
  const closeDrawer = () => {
    setShowdrawer(false);
  };
  const showbuy = () => {
    setBuyding(true);
  };
  const close = () => {
    setBuyding(false);
  };
  const goContent = () => {
    navigation.navigate('Content');
  };
  const change = () => {
    setShowdrawer(false);
    navigation.navigate('Change');
  };
  const Showlist = () => {};
  const closeadd = () => {
    setShowmodal(false);
  };
  const gotoedit=()=>{
    setShowmodal(false)
    navigation.navigate('Edit')
  }
  return (
    <View style={StylesHome.container}>
      <ScrollView>
        <Backgound nextpage={nextpage} show={show} showDrawer={showDrawer} />
        <View style={{backgroundColor: '#fff', borderRadius: 10}}>
          <View style={StylesHome.header}>
            <ScrollView
              horizontal
              onScroll={e => {
                handlescroll(e.nativeEvent.contentOffset.x);
              }}>
              {Lists.map((item, index) => {
                return (
                  <View style={StylesHome.list} key={index}>
                    <List showbuy={showbuy} goContent={goContent} />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={StylesHome.dos}>
            {Lists.map((item, index) => {
              return (
                <Text
                  style={
                    index == indexs ? StylesHome.textdos1 : StylesHome.textdos2
                  }
                  key={index}>
                  ●
                </Text>
              );
            })}
          </View>
          <View style={{flex: 1, top: -80}}>
            <View style={StylesHome.title}>
              <Title text="BÀI VIẾT" image={Images.pen} Showlist={Showlist} />
            </View>
            <ViewBaby Goposts={Goposts} />
            <ViewBaby Goposts={Goposts} />
            <ViewBaby Goposts={Goposts} />
            <ViewBaby Goposts={Goposts} />
          </View>
          <View style={StylesHome.endow}>
            <Image source={Images.Ticket} style={StylesHome.ticket} />
            <Text style={StylesHome.text}>CÁC GÓI ƯU ĐÃI</Text>
          </View>
          <Endow Pay={Pay} />
          <Image source={Images.picture} style={StylesHome.picture} />
        </View>
      </ScrollView>
      {showmodal && <ModalAdd hidden={hidden} closeadd={closeadd}  gotoedit={gotoedit}/>}
      {showpay && <ModalPay closemodalpay={closemodalpay}/>}
      {showdrawe && (
        <Drawer closeDrawer={closeDrawer} logout={logout} change={change} />
      )}
      {buyding && <Buying close={close} />}
    </View>
  );
};

export default Home;
