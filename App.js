/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import { enableReactotron } from './src/config';

enableReactotron(true);
//enableReactotron(__DEV__, { host: '10.1.1.92' });

import App from './src/App';

export default App;
