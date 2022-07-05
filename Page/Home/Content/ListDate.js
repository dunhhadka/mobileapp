import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const ListDate = (props) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.05)'}}>
      <TouchableOpacity style={{flex:1}} onPress={()=>{
        props.close()
      }}/>
        <View
          style={{
            width: 139 * px,
            height: 224 * px,
            backgroundColor: '#fff',
            borderRadius: 15 * px,
            paddingLeft: 25 * px,
            position: 'absolute',
            right: 20 * px,
            top: 150 * px,
            elevation: 1 * px,
          }}>
          <TouchableOpacity onPress={()=>{
               props.close()
          }}>
            <Text style={styles.text}>THÁNG 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>THÁNG 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
               props.close()
          }}>
            <Text style={styles.text1}>THÁNG NÀY</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>THÁNG 4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>THÁNG 5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>THÁNG 6</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ListDate;

const styles = StyleSheet.create({
  text: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#828282',
    marginTop: 13 * px,
  },
  text1: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: '#01B2FF',
    marginTop: 13 * px,
  },
});
