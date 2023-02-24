import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";

import React, {useEffect} from 'react';
import {LogBox, PermissionsAndroid, Platform} from 'react-native';

import './src/util';
// import './services';

import {Routes} from './src/Routes';
import {storeWrapper} from './src/redux';
import {Provider} from 'react-redux';




// enableLatestRenderer();

const MyApp = () => {

  return (
    <Provider store={storeWrapper}>
      {global.alerta.statusBar()}
      <NativeBaseProvider>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
          // translucent
        />
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );

};
export default MyApp;
