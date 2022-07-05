import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef, useEffect, useState} from 'react';

import Home from './Home/Home';
import Blog from './Blog/Blog';
import Activity from './Activity/Activity';
import Notification from './Notification/Notification';
import Account from './Account/Account';
import Images from '../Images/Images';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const px = width / 414;
const Tab = createBottomTabNavigator();
const IndexPage = ({naviagiton}) => {

  
  const Tabbar = [
    {name: 'Trang chủ ', component: Home, images: Images.Home},
    {name: 'Blog      ', component: Blog, images: Images.Doc},
    {name: 'Hoạt động ', component: Activity, images: Images.Bookmark},
    {
      name: 'Thông báo ',
      component: Notification,
      images: Images.Notification,
    },
    {name: 'Thông tin bé', component: Account, images: Images.Profile},
  ];
  const TabButton = props => {
    const anima = useRef(new Animated.Value(0)).current;
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;
    useEffect(() => {
      Animated.timing(anima, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [focused]);
    return (
      <TouchableOpacity style={styles.tabcontainer} onPress={onPress}>
        <Animated.View
          style={{
            ...styles.btn,
            width: focused ? 112 * px : null,
            backgroundColor: focused ? '#01B2FF' : null,
            transform:[{scale:focused?anima:1}]
          }}>
          <Image
            source={item.images}
            style={{...styles.image, tintColor: focused ? '#fff' : '#828282'}}
          />

          {focused && <Text style={styles.text}>{item.name}</Text>}
        </Animated.View>
      </TouchableOpacity>
    );
  };
 
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65 * px,
          paddingHorizontal: 20 * px,
          position: 'absolute',
        },
      }}
      initialRouteName='Trang chủ'
      >
      {Tabbar.map((item, index) => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={index}
            options={{
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  image: {
    width: 20 * px,
    height: 20 * px,
    resizeMode: 'stretch',
    marginLeft: 5 * px,
  },

  tabcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
  },
  text: {
    fontSize: 13 * px,
    color: '#fff',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 36 * px,
    borderRadius: 20 * px,
    alignItems: 'center',
  },
});
