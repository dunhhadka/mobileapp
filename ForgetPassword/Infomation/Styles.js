import { StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
const px=width/414
const Styles=StyleSheet.create({
     container:{
         flex:1,
          backgroundColor:'#01B2FF'
     },
     header:{
          marginTop:56*px,
          alignSelf:'center',
          alignItems:'center',
          marginBottom:24*px
     },
     textheader:{
          fontWeight:'700',
          fontSize:17*px,
          color:'#FFFFFF'
     },
     text:{
          fontSize:13*px,
          fontWeight:'400',
          color:'#FFFFFF'
     },
     body:{
        paddingHorizontal:66*px,
         flex:1,
         backgroundColor:'#E5E5E5',
         borderTopLeftRadius:15*px,
         borderTopRightRadius:15*px,
         paddingTop:24*px,
         
         
     },
     viewavatar:{
          height:120*px,
          borderRadius:20*px,
          flexDirection:'row'
     },
     baby:{
          width:120*px,
          height:120*px,
          resizeMode:'stretch'
     },
     gt:{
          width:117*px,
          height:36*px,
       
         borderRadius:20*px,
         marginLeft:29*px,
         flexDirection:'row',
         alignItems:'center',
         marginVertical:10*px
     },
     boy:{
          width:17.04*px,
          height:20*px,
          resizeMode:'stretch',
          marginHorizontal:16*px,
         
     },
     boxgt:{
          alignSelf:'center'
     }
})

export default Styles

