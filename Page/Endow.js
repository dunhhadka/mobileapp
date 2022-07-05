import {StyleSheet, Text, View, Dimensions, Image,TouchableOpacity} from 'react-native';
import React,{memo} from 'react';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Endow = (props) => {
  const pay=()=>{
    props.Pay()
  }
  const Text1 = (props) => {
    return (
      <View style={styles.box}>
        <Image source={(props.color=='#01B2FF')?Images.Path1:Images.Path} style={styles.path} />
        <Text style={{...styles.text,color:props.color}}>Lợi thế ưu đãi 1</Text>
      </View>
    );
  };
  const Viewendow = props => {
    return (
      <TouchableOpacity style={{...styles.viewbox,backgroundColor:'#fff'}} onPress={()=>{
        pay()
      }}>
        <Text style={{...styles.do,color:'#0094FF'}}>{props.text}</Text>
        <Text1 color='#01B2FF'/>
        <Text1 color='#01B2FF'/>
        <Text1 color='#01B2FF'/>
        <Text1 color='#01B2FF'/>
        <View style={{...styles.sale,backgroundColor:'#0094FF'}}>
          <Text style={styles.textsale}>Sale 50%</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.viewbox} onPress={()=>{
        pay()
      }}>
        <Text style={styles.do}>19$/tháng</Text>
        <Text1 />
        <Text1 />
        <Text1 />
        <Text1 />
        <View style={styles.sale}>
          <Text style={styles.textsale}>Sale 50%</Text>
        </View>
      </TouchableOpacity>
      <Viewendow text='200$/năm'/>
    </View>
  );
};

export default memo(Endow);

const styles = StyleSheet.create({
  container: {
     flexDirection:'row',
    paddingHorizontal: 16 * px,
  },
  do: {
    fontWeight: '800',
    fontSize: 17 * px,
    color: '#ffff',
    marginVertical: 13 * px,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8 * px,
  },
  path: {
    width: 12 * px,
    height: 10 * px,
    
  },
  text: {
    fontWeight: '400',
    fontSize: 13 * px,
    color: '#ffff',
    marginLeft: 9 * px,
  },
  viewbox: {
    width: 183 * px,
    height: 226 * px,
     marginRight:16*px,
    backgroundColor: '#01B2FF',
    paddingLeft: 15 * px,
    borderRadius: 10 * px,
    borderTopRightRadius: 60 * px,
    borderWidth:1*px,
    borderColor:'#01B2FF'
  },
  sale: {
    position: 'absolute',
    width: 183 * px,
    height: 32 * px,
    backgroundColor: '#F26091',
    bottom: 18 * px,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsale: {
    fontSize: 13 * px,
    fontWeight: '800',
    color: '#fff',
  },
});
