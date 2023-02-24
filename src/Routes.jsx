import React from 'react';
// import { Dimensions, Platform, Text, View, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

import {navigationRef} from './RootNavigation';
import Home from './screens/home';




export const Routes = props => (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="home"
      >

        <Stack.Screen 
        name="home" component={Home}

        // initialParams={{ user: props.user }}
        />
      </Stack.Navigator>
    </NavigationContainer>
)