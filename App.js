import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../scr/Homescreen';
import DetailScreen from '../scr/Detailscreen';
import CustomDrawerContent3 from '../CustomDrawerContent3';

const Drawer = createDrawerNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Detail'
      drawerContent={(props)=> <CustomDrawerContent3 {...props}/>}
      >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Detail' component={DetailScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>

  )
}
export default App;
const style = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:"center"
    }
  }
)
