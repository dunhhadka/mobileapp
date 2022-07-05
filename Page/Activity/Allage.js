import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Images from '../../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Allage = (props) => {
     const [show1, setShow1] = useState(1);
     const box = [
          {
            image: Images.GO,
            title: '0-1 TUỔI',
          },
          {
            image: Images.GO,
            title: '1-3 TUỔI',
          },
          {
            image: Images.GO,
            title: '3-5 TUỔI',
          },
        ];
        const array = [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1];
  return (
     <View>
        <View style={styles.moteur}>
          {box.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  ...styles.box,
                  backgroundColor: index === show1 ? '#F26091' : '#DEDEDE',
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
                <Image source={item.image} style={{...styles.motor,tintColor:'#fff'}} />
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
          <Text style={styles.go}>1-3 TUỔI</Text>
        </View>
        <ScrollView>
          {array.map((item, index) => {
            return (
              <TouchableOpacity style={styles.video} key={index}
              onPress={()=>{
                props.next()
              }}
              >
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
  )
}

export default Allage

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
   