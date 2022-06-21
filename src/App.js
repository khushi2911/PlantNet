/* eslint-disable prettier/prettier */
import { StatusBar, Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import COLORS from './consts/colors';
const Stack = createNativeStackNavigator();

function MyStack()
{
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content'backgroundColor={COLORS.dark}/>

      <Stack.Navigator screenOptions={{header:()=>null}}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name ='details' component={DetailsScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}
export default MyStack;