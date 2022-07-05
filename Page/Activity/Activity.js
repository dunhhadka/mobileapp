import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Backgound from '../Backgound';
import Header from '../Header';
import Title from '../Title';
import Images from '../../Images/Images';
import ModalAdd from '../Home/ModalAdd';
import Drawer from '../Home/Drawer';
import Alert from './Alert';
import Location from './Location';
import Time from './Time';
import Allactivity from './Allactivity';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;

const Activity = ({navigation}) => {
  const [showmodal, setShowmodal] = useState(false);
  const [showdrawe, setShowdrawer] = useState(false);
  const [showlist, setShowlist] = useState(false);
  const [headername, setheadername] = useState('THEO DANH MỤC');
  const [images, setImages] = useState(Images.doc3);
  const [all, setall] = useState(1);
  const chooseall=(number)=>{
    setall(number)
  }
  const Showlist = () => {
    setShowlist(true);
  };
  const closelist = () => {
    setShowlist(false);
  };
  const chooseheader = (text, images) => {
    setheadername(text);
    setImages(images);
  };
  const nextpage = () => {
    navigation.navigate('Edit');
  };
  const show = () => {
    setShowmodal(true);
  };
  const hidden = () => {
    setShowmodal(false);
    navigation.navigate('Add')
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
  const [show1, setShow1] = useState(0);
  const box = [
    {
      image: Images.motor,
      title: 'Vận động thô',
    },
    {
      image: Images.Glisser,
      title: 'Vận động tinh',
    },
    {
      image: Images.Icon,
      title: 'Nhận thức',
    },
  ];
  const array = [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1];
  const next=()=>{
    navigation.navigate('Content')
  }
  const closeadd=()=>{
    setShowmodal(false)
  }
  const gotoedit=()=>{
    setShowmodal(false)
    navigation.navigate('Edit')
  }
  const showview = () => {
    switch (headername) {
      case 'THEO ĐỊA ĐIỂM': {
        return <Location next={next}/>;
      }
      case 'THEO DANH MỤC': {
        return (
          <View>
            <View style={styles.moteur}>
              {box.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{
                      ...styles.box,
                      backgroundColor: index === show1 ? '#01B2FF' : '#DEDEDE',
                    }}
                    key={index}
                    onPress={() => {
                      setShow1(index);
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                      }}>
                      <Text style={styles.text}>{item.title}</Text>
                    </View>
                    <Image source={item.image} style={styles.motor} />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 16 * px,
                alignItems: 'center',
                marginTop: 29 * px,
              }}>
              <Image source={Images.GO} style={styles.GO} />
              <Text style={styles.go}>TẬP ĐI</Text>
            </View>
            <ScrollView>
              {array.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.video} key={index}
                  onPress={()=>{
                    navigation.navigate('Content')
                  }}
                  >
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Image source={Images.Kiss} style={styles.kiss} />
                      <Image source={Images.Play} style={styles.play} />
                    </View>
                    <View style={{flex: 1, paddingLeft: 16 * px}}>
                      <View style={{flexDirection: 'row', marginTop: 16 * px}}>
                        <Image
                          source={Images.Glisser}
                          style={{...styles.motor, tintColor: '#01B2FF'}}
                        />
                        <Text style={styles.text1}>Vận động tinh</Text>
                      </View>
                      <Text style={styles.textbody}>
                        Dạy trẻ đi trong nhà - Ngoài trời
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        );
      }
      case 'LỊCH SỬ LUYỆN TẬP': {
        return <Time next={next}/>;
      }
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Backgound nextpage={nextpage} show={show} showDrawer={showDrawer} />
      <View
        style={{
          top: -130 * px,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20 * px,
          borderTopRightRadius: 20 * px,
        }}>
        <Header chooseall={chooseall}/>
        {(all==1)&&
          <View>
            <Title text={headername} image={images} Showlist={Showlist} />
            {showview()}
          </View>
        }
        {
          (all==2)&&<Allactivity next={next}/>
        }
      </View>

      {showmodal && <ModalAdd hidden={hidden} closeadd={closeadd} gotoedit={gotoedit}/>}
      {showdrawe && <Drawer closeDrawer={closeDrawer} logout={logout} />}
      {showlist && <Alert closelist={closelist} chooseheader={chooseheader} />}
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  moteur: {
    height: 80 * px,
    paddingHorizontal: 16 * px,
    flexDirection: 'row',
    marginTop: 15 * px,
    justifyContent: 'space-around',
  },
  motor: {
    width: 20 * px,
    height: 18.62 * px,
    marginBottom: 5 * px,
    resizeMode: 'stretch',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 116 * px,

    borderRadius: 16 * px,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 17 * px,
    fontWeight: '800',
    textAlign: 'center',
  },
  go: {
    fontSize: 15 * px,
    fontWeight: '700',
    color: '#FF6188',
    marginLeft: 12 * px,
  },
  GO: {
    width: 20 * px,
    height: 15 * px,
  },
  video: {
    height: 100 * px,
    marginHorizontal: 16 * px,
    marginTop: 16 * px,
    borderRadius: 16 * px,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
    
  },
  kiss: {
    width: 117 * px,
    height: '100%',
    resizeMode: 'stretch',
  },
  play: {
    width: 27 * px,
    height: 27 * px,
    position: 'absolute',
  },
  text1: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
    marginLeft: 13 * px,
  },
  textbody: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#333333',
    marginTop: 8 * px,
  },
});
