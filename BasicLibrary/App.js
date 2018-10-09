/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Modal } from 'react-native';
import { DisableBack } from './src/HOC/TestHOC2';
import { demoFunction } from './src/HOC/TestHOC';
import LoaderViewer from './src/Base/LoaderViewer';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showSpinner: true };
		setTimeout(() => {
			this.setState({ showSpinner: false });
		}, 3000);
	}
	render() {
		console.warn('-->', JSON.stringify(this.props, null, 2));
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
				<Modal transparent={false} visible={this.state.showSpinner}>
					<LoaderViewer />
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
export default DisableBack(demoFunction(App));
