import {
     StyleSheet,
     Text,
     View,
     Dimensions,
     ScrollView,
     Image,
   } from 'react-native';
   import React from 'react';
   import Images from '../../../Images/Images';
   const width = Dimensions.get('window').width;
   const height = Dimensions.get('window').height;
   const px = width / 414;
   const Week = () => {
     const INDEX = [
       {
         image: Images.GO,
         name: 'Vận động tinh',
         percent: '90%',
         colorbar: '#01B2FF',
       },
       {
         image: Images.Glisser,
         name: 'Vận động thô',
         percent: '80%',
         colorbar: '#0038FF',
       },
       {
         image: Images.toddler,
         name: 'Nhận thức',
         percent: '60%',
         colorbar: '#41CA00',
       },
       {
         image: Images.languge,
         name: 'Ngôn ngữ',
         percent: '90%',
         colorbar: '#FF7A00',
       },
       {
         image: Images.eye,
         name: 'Giác quan',
         percent: '60%',
         colorbar: '#4481EB',
       },
       {
         image: Images.brush,
         name: 'Tự lập',
         percent: '70%',
         colorbar: '#D57BFF',
       },
       {
         image: Images.twobaby,
         name: 'Cảm xúc XH',
         percent: '80%',
         colorbar: '#FF6188',
       },
     ];
     const Bar = props => {
       return (
         <View style={styles.bar}>
           <Image
             source={props.image}
             style={{...styles.go, tintColor: props.colorbar}}
           />
           <View style={{width: 110 * px, paddingLeft:10*px}}>
             <Text style={styles.text}>{props.name}</Text>
           </View>
           <View style={{flex: 1}}>
             <View
               style={{
                 width: '100%',
                 borderWidth: 1.5 * px,
                 borderColor: '#C4C4C4',
               }}
             />
             <View
               style={{
                 position: 'absolute',
                 width: props.percent,
                 borderWidth: 1.5 * px,
                 borderColor: props.colorbar,
               }}
             />
           </View>
           <Text
             style={{
               position: 'absolute',
               right: 0,
               top: -10 * px,
               fontSize: 9 * px,
               fontWeight: '400',
               color: props.colorbar,
             }}>
             {props.percent}
           </Text>
         </View>
       );
     };
     return (
       <View style={{height}}>
         <ScrollView>
           <View style={styles.index}>
             <View style={{...styles.indexbox, borderRightWidth: 1 * px}}>
               <View style={styles.fraction}>
                 <Text style={styles.number}>6</Text>
                 <Text style={styles.num}> / 35</Text>
               </View>
               <Text style={styles.title}>Hoạt động Hoàn thành</Text>
             </View>
             <View style={{...styles.indexbox, borderLeftWidth: 1 * px}}>
               <View style={styles.fraction}>
                 <Text style={styles.number}>3</Text>
                 <Text style={styles.num}> %</Text>
               </View>
               <Text style={styles.title}>Mục tiêu tháng</Text>
             </View>
           </View>
           <View style={styles.body}>
             <Text style={styles.Title}>CHỈ SỐ BÀI TẬP</Text>
             <Text style={styles.month}>Tháng 3</Text>
             <View
               style={{
                 marginVertical: 10 * px,
                 paddingVertical: 10 * px,
                 borderColor: 'gray',
               }}>
               {INDEX.map((item, index) => {
                 return (
                   <Bar
                     key={index}
                     image={item.image}
                     name={item.name}
                     percent={item.percent}
                     colorbar={item.colorbar}
                   />
                 );
               })}
               <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                 <Text style={styles.ratio}>0%</Text>
                 <Text style={styles.ratio}>25%</Text>
                 <Text style={styles.ratio}>50%</Text>
                 <Text style={styles.ratio}>75%</Text>
                 <Text style={styles.ratio}>100%</Text>
               </View>
             </View>
             <Text style={styles.header2}>THEO DÕI TỪNG NGÀY</Text>
           </View>
         </ScrollView>
       </View>
     );
   };
   
   export default Week;
   
   const styles = StyleSheet.create({
     index: {
       height: 80 * px,
       flexDirection: 'row',
       borderRadius: 10 * px,
     },
     fraction: {
       flexDirection: 'row',
       alignItems: 'flex-end',
       marginBottom: 10 * px,
     },
     number: {
       fontSize: 27 * px,
       fontWeight: '700',
       color: '#01B2FF',
     },
     num: {
       fontSize: 15 * px,
       fontWeight: '700',
       color: 'gray',
     },
     title: {
       fontSize: 11 * px,
       fontWeight: '400',
       color: 'gray',
     },
     indexbox: {
       alignItems: 'center',
       justifyContent: 'center',
       width: '50%',
   
       borderColor: '#01B2FF',
     },
     Title: {
       fontSize: 15 * px,
       fontWeight: '600',
       color: 'black',
     },
     body: {
       paddingHorizontal: 24 * px,
       marginTop: 30 * px,
       height,
     },
     month: {
       fontSize: 13 * px,
       fontWeight: '400',
       color: '#000000',
       marginTop: 10 * px,
     },
     bar: {
       flexDirection: 'row',
       alignItems: 'center',
       marginVertical: 15 * px,
     },
     go: {
       width: 20 * px,
       height: 20 * px,
       resizeMode: 'stretch',
     },
     text: {
       fontSize: 13 * px,
       fontWeight: '400',
       color: '#333333',
     },
     header2: {
       fontSize: 15 * px,
       fontWeight: '600',
       color: 'black',
     },
     ratio: {
       fontSize: 11 * px,
       fontWeight: '400',
       color: 'black',
       marginLeft: 22 * px,
     },
   });
   