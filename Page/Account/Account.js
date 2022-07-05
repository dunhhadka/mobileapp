import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import Backgound from '../Backgound';
import ModalAdd from '../Home/ModalAdd';
import Drawer from '../Home/Drawer';
import Images from '../../Images/Images';
import Title from '../Title';
import Modalchoose from './Modalchoose';
import Month from './Info/Month';
import Week from './Info/Week';
import Health from './Health/Health';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Account = ({navigation}) => {
  const [showmodal, setShowmodal] = useState(false);
  const [showdrawe, setShowdrawer] = useState(false);
  const [showlist, setShowlist] = useState(false);
  const [header, setheader] = useState({
    name: 'THEO THÁNG',
    image: Images.Datetwo,
  });
  const [choosecontent, setchoosecontent] = useState(1);
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
  const Showlist = () => {
    setShowlist(true);
  };
  const closelist = () => {
    setShowlist(false);
  };
  const chooseheader = (text, image) => {
    setheader({
      name: text,
      image: image,
    });
  };
  const closeadd=()=>{
    setShowmodal(false)
  }
  const gotoedit=()=>{
    setShowmodal(false)
    navigation.navigate('Edit')
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Backgound nextpage={nextpage} show={show} showDrawer={showDrawer} />
      {showmodal && <ModalAdd hidden={hidden} closeadd={closeadd} gotoedit={gotoedit}/>}
      {showdrawe && <Drawer closeDrawer={closeDrawer} logout={logout} />}
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            ...styles.box,
            backgroundColor: choosecontent == 1 ? '#01B2FF' : '#DEDEDE',
          }}
          onPress={() => {
            setchoosecontent(1);
          }}>
          <Image
            source={Images.mess}
            style={{
              ...styles.mess,
              tintColor: choosecontent == 1 ? '#fff' : 'gray',
            }}
          />
          <Text
            style={{
              ...styles.info,
              color: choosecontent == 1 ? '#fff' : 'gray',
            }}>
            Thông tin luyện tập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.box,
            backgroundColor: choosecontent == 2 ? '#01B2FF' : '#DEDEDE',
          }}
          onPress={() => {
            setchoosecontent(2);
          }}>
          <Image
            source={Images.Heart}
            style={{
              ...styles.mess,
              tintColor: choosecontent == 2 ? '#fff' : 'gray',
            }}
          />
          <Text
            style={{
              ...styles.info,
              color: choosecontent == 2 ? '#fff' : 'gray',
            }}>
            Chỉ số sức khỏe
          </Text>
        </TouchableOpacity>
      </View>
      {choosecontent == 1 ? (
        <View>
          <View style={{top: -220 * px}}>
            <Title
              text={header.name}
              image={header.image}
              Showlist={Showlist}
            />
          </View>
          {showlist && (
            <Modalchoose closelist={closelist} chooseheader={chooseheader} />
          )}
          <View style={{top: -200 * px, paddingHorizontal: 16 * px}}>
            {header.name == 'THEO THÁNG' ? <Month /> : <Week />}
          </View>
        </View>
      ) : (
        <Health/>
      )}
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingTop: 16 * px,
    paddingHorizontal: 16 * px,
    top: -135 * px,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15 * px,
    borderTopRightRadius: 15 * px,
    paddingBottom: 100 * px,
    
  },
  box: {
    width: 183 * px,
    height: 36 * px,
    backgroundColor: '#01B2FF',
    borderRadius: 20 * px,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16 * px,
  },
  mess: {
    width: 16 * px,
    height: 16 * px,
  },
  info: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 13 * px,
  },
});
