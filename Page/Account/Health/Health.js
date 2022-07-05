import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Heigth from './Heigth';
import Head from './Head';
import Weigth from './Weigth';
import Indexupdate from './Indexupdate';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Health = () => {
  const [choose, setChoose] = useState(1);
  const [Color, setColor] = useState('#F26091');
  const [show, setshow] = useState(false);
  const colorbox = (number, color) => {
    setChoose(number);
    setColor(color);
  };
  const close=()=>{
     setshow(false)
  }
  const open=()=>{
     setshow(true)
  }
  const chooseview = () => {
    switch (choose) {
      case 1:
        return <Heigth maincolor="#F26091" open={open}/>;
      case 2:
        return <Weigth maincolor="#0094FF" open={open}/>;
      case 3:
        return <Head maincolor="#FFA796" open={open}/>;
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              ...styles.check,
              backgroundColor: choose == 1 ? '#F26091' : '#828282',
            }}
            onPress={() => {
              colorbox(1, '#F26091');
            }}>
            <Text style={styles.title}>CHIỀU CAO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.check,
              backgroundColor: choose == 2 ? '#0094FF' : '#828282',
            }}
            onPress={() => {
              colorbox(2, '#0094FF');
            }}>
            <Text style={styles.title}>CÂN NẶNG</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.check,
              backgroundColor: choose == 3 ? '#FFA796' : '#828282',
            }}
            onPress={() => {
              colorbox(3, '#FFA796');
            }}>
            <Text style={styles.title}>CHU VI ĐẦU</Text>
          </TouchableOpacity>
          {choose == 1 && (
            <View style={styles.index}>
              <View style={{...styles.birth, borderColor: '#F26091'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>60</Text>
                  <Text style={{...styles.cm, color: Color}}>cm</Text>
                </View>
                <Text style={styles.text}>Khi sinh</Text>
              </View>
              <View style={{...styles.birth, borderColor: '#F26091'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>85</Text>
                  <Text style={{...styles.cm, color: Color}}>cm</Text>
                </View>
                <Text style={styles.text}>Hiện tại</Text>
              </View>
              <View style={{...styles.birth, borderRightWidth: 0}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>32</Text>
                  <Text style={{...styles.cm, color: Color}}>%</Text>
                </View>
                <Text style={styles.text}>Tăng trưởng</Text>
              </View>
            </View>
          )}
          {choose == 2 && (
            <View style={styles.index}>
              <View style={{...styles.birth, borderColor: '#0038FF'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>3.4</Text>
                  <Text style={{...styles.cm, color: Color}}>kg</Text>
                </View>
                <Text style={styles.text}>Khi sinh</Text>
              </View>
              <View style={{...styles.birth, borderColor: '#0038FF'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>6.0</Text>
                  <Text style={{...styles.cm, color: Color}}>kg</Text>
                </View>
                <Text style={styles.text}>Hiện tại</Text>
              </View>
              <View style={{...styles.birth, borderRightWidth: 0}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>32</Text>
                  <Text style={{...styles.cm, color: Color}}>%</Text>
                </View>
                <Text style={styles.text}>Tăng trưởng</Text>
              </View>
            </View>
          )}
          {choose == 3 && (
            <View style={styles.index}>
              <View style={{...styles.birth, borderColor: '#FF6188'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>60</Text>
                  <Text style={{...styles.cm, color: Color}}>cm</Text>
                </View>
                <Text style={styles.text}>Khi sinh</Text>
              </View>
              <View style={{...styles.birth, borderColor: '#FF6188'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>85</Text>
                  <Text style={{...styles.cm, color: Color}}>cm</Text>
                </View>
                <Text style={styles.text}>Hiện tại</Text>
              </View>
              <View style={{...styles.birth, borderRightWidth: 0}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{...styles.number, color: Color}}>32</Text>
                  <Text style={{...styles.cm, color: Color}}>%</Text>
                </View>
                <Text style={styles.text}>Tăng trưởng</Text>
              </View>
            </View>
          )}
        </View>
        {chooseview()}
      </ScrollView>
      {show && <Indexupdate close={close}/>}
    </View>
  );
};

export default Health;

const styles = StyleSheet.create({
  container: {
    height,
    top: -210 * px,
    paddingHorizontal: 16 * px,
  },
  header: {
    width: 382 * px,
    height: 132 * px,
    flexDirection: 'row',
  },
  check: {
    height: '100%',
    width: '33.33%',
    backgroundColor: 'blue',
    borderRadius: 8 * px,
    alignItems: 'center',
  },
  title: {
    fontSize: 13 * px,
    fontWeight: '700',
    color: '#fff',
    marginTop: 10 * px,
  },
  index: {
    width: '100%',
    height: 96 * px,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 0,
    borderRadius: 8 * px,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 5 * px,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  birth: {
    height: '100%',
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1.5 * px,
  },
  number: {
    fontSize: 27 * px,
    fontWeight: '700',
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '400',
    color: '#828282',
  },
  cm: {
    fontSize: 13 * px,
    fontWeight: '700',

    top: -5 * px,
  },
});
