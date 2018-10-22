/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { DisableBack } from './src/HOC/TestHOC2';
import { demoFunction } from './src/HOC/TestHOC';
import LoaderViewer from './src/Base/LoaderViewer';
import CounterApp from './src/Redux/CounterApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNTER':
			return { counter: state.counter + 1 };
		case 'DECREASE_COUNTER':
			return { counter: state.counter - 1 };
	}
	return state;
};

const store = createStore(reducer);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { showSpinner: true };
		setTimeout(() => {
			this.setState({ showSpinner: false });
		}, 3000);
	}
	render() {
		//console.warn('-->', JSON.stringify(this.props, null, 2));

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<CounterApp />
					<Modal transparent={false} visible={this.state.showSpinner}>
						<LoaderViewer />
					</Modal>
				</View>
			</Provider>
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
