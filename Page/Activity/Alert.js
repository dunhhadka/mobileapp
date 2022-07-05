import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React from 'react';
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Alert = props => {
  const choose = (text,images) => {
    props.closelist();
     if(text=='Theo lịch sử')
     {
          text='Lịch sử luyện tập'
     }
    props.chooseheader(text.toLocaleUpperCase(),images)
  };
  const title = [
    {
      image: Images.doc3,
      name: 'Theo danh mục',
    },
    {
      image: Images.time,
      name: 'Theo lịch sử',
    },
    {
      image: Images.Location,
      name: 'Theo địa điểm',
    },
  ];

  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
      <TouchableOpacity style={{flex:1}} onPress={()=>{
        props.closelist()
      }}/>
        <View style={styles.container}>
          {title.map((item, index) => {
            return (
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                onPress={() => {
                  choose(item.name,item.image);
                }}
                
                key={index}>
                <Image source={item.image} style={styles.icon} />
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  container: {
    width: 139 * px,
    height: 119 * px,
    backgroundColor: '#fff',
    borderRadius: 15 * px,
    paddingLeft: 5 * px,
    paddingVertical: 15 * px,
    justifyContent: 'space-around',
    position: 'absolute',
    right: 16 * px,
    top: 250 * px,
  },
  icon: {
    width: 18 * px,
    height: 18 * px,
    resizeMode: 'stretch',
    marginRight: 5 * px,
  },
  text: {
    fontSize: 13 * px,
    fontWeight: '600',
    color: 'gray',
  },
});
