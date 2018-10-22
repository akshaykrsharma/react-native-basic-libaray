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
import Header from './src/Components/Header';

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
		}, 1500);
	}

	leftClick = () => {
		console.warn('Left Button is Clicked');
	};
	rightClick = () => {
		console.warn('Right Button is Clicked');
	};
	render() {
		//console.warn('-->', JSON.stringify(this.props, null, 2));

		return (
			<Provider store={store}>
				<View>
					<Header
						title={'HOME SCREEN'}
						leftButton={'Back'}
						rightButton={'Cancel'}
						onLeftPress={this.leftClick}
						onRightPress={this.rightClick}
					/>
					<View style={styles.container}>
						<CounterApp />
						<Modal transparent={false} visible={this.state.showSpinner}>
							<LoaderViewer />
						</Modal>
					</View>
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
	}
});
export default DisableBack(demoFunction(App));
