import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../Images/Images';
import Backgound from '../Backgound';
import Header from '../Header';
import Title from '../Title';
import ModalAdd from '../Home/ModalAdd';
import Drawer from '../Home/Drawer';
const width = Dimensions.get('window').width;

const px = width / 414;
const Notification = ({navigation}) => {
  const [showmodal, setShowmodal] = useState(false);
  const [showdrawe, setShowdrawer] = useState(false);
  const nextpage = () => {
    navigation.navigate('Edit');
  };
  const show = () => {
    setShowmodal(true);
  };
  const hidden = () => {
    setShowmodal(false);
    navigation.navigate('Add');
  };
  const showDrawer = () => {
    setShowdrawer(true);
  };
  const closeDrawer = () => {
    setShowdrawer(false);
  };
  const logout = () => {
    navigation.navigate('Login');
  };
  const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const Showlist=()=>{

  }
  const chooseall=()=>{
    
  }
  const closeadd=()=>{
    setShowmodal(false)
  }
  const gotoedit=()=>{
    setShowmodal(false)
    navigation.navigate('Edit')
  }
  return (
    <View>
      <Backgound nextpage={nextpage} show={show} showDrawer={showDrawer} />
      <View
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          top: 120 * px,
          borderTopLeftRadius: 15 * px,
          borderTopRightRadius: 15 * px,

          height: 610 * px,
        }}>
        <Header chooseall={chooseall}/>
        <Title text="THÔNG BÁO" image={Images.pen} Showlist={Showlist}/>
        <ScrollView>
          {array.map((item, index) => {
            return (
              <TouchableOpacity style={styles.Picture} key={index}
              onPress={()=>{
                navigation.navigate('Details')
              }}
              >
                <Image source={Images.babyone} style={styles.baby} />
                <View style={{marginLeft: 16 * px}}>
                  <Text style={styles.promotion}>Khuyến mãi cho bé</Text>
                  <View style={{width: 236 * px}}>
                    <Text style={styles.textbody}>
                      Các hoạt động trong giai đoạn của bé thường rất quan trọng
                    </Text>
                  </View>
                  <Text style={styles.time}>6.00 pm 15 thg 3</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {showmodal && <ModalAdd hidden={hidden} closeadd={closeadd} gotoedit={gotoedit}/>}
        {showdrawe && <Drawer closeDrawer={closeDrawer} logout={logout} />}
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  Picture: {
    marginHorizontal: 16 * px,
    marginTop: 16 * px,
    height: 108 * px,
    borderRadius: 8 * px,
    flexDirection: 'row',
    elevation: 0.3*px,
  },
  baby: {
    width: 117 * px,
    height: '100%',
    resizeMode: 'stretch',
  },
  promotion: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#333333',
    marginTop: 10 * px,
  },
  time: {
    fontSize: 11 * px,
    fontWeight: '400',
    color: '#828282',
    marginTop: 10 * px,
  },
  textbody: {
    fontSize: 11 * px,
    fontWeight: '400',
    color: '#333333',
    lineHeight: 18 * px,
  },
});
