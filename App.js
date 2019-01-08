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
import store from './src/Redux/store';

import AppNavigation from './src/Navigation/AppNavigation';

enableReactotron(true);
//enableReactotron(__DEV__, { host: '10.1.1.92' });

import { Provider } from 'react-redux';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppNavigation />
			</Provider>
		);
	}
}
