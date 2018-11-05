import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Utils from '../Components/Utils';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import InputTextLayout from '../Components/InputTextLayout';
import Header from '../Components/Header';
import List from '../Components/List';

class CounterApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMsg: null
		};
	}

	// state = {
	// 	counter: 0
	// };

	// increaseCounter = () => {
	// 	this.setState({ counter: this.state.counter + 1 });
	// };

	// decreaseCounter = () => {
	// 	this.setState({ counter: this.state.counter - 1 });
	// };

	onPress = () => {
		console.warn('btn is Clicked ');
		const errorMsg = 'please enter a valid password';
		this.setState({ errorMsg });
		//navigate('Home');
	};

	onAccessoryPress() {
		console.warn('asdfasdf');
	}

	renderPasswordAccessory() {
		let name = true ? 'visibility' : 'visibility-off';

		return (
			<MaterialIcon
				size={24}
				name={name}
				color={TextField.defaultProps.baseColor}
				onPress={this.onAccessoryPress}
				suppressHighlighting
			/>
		);
	}

	render() {
		return (
			<View>
				<List />
			</View>
		);

		return (
			<ScrollView>
				<View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
						<TouchableOpacity onPress={() => this.props.increaseCounter()}>
							<Text style={{ fontSize: 20, padding: 10 }}>INCREASE</Text>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, padding: 10 }}>{this.props.counter}</Text>
						<TouchableOpacity onPress={() => this.props.decreaseCounter()}>
							<Text style={{ fontSize: 20, padding: 10 }}>DECREASE</Text>
						</TouchableOpacity>
					</View>

					<InputTextLayout
						label="User Name"
						title="It will be your login id"
						onChangeText={username => {
							this.setState({ username });
						}}
					/>
					<InputTextLayout
						isPassword={true}
						label="Password"
						title="make it hard to crack"
						onChangeText={password => {
							this.setState({ password });
						}}
					/>

					<Button
						title={'SUBMIT'}
						onPress={this.onPress}
						containerStyle={{ marginTop: 30, width: '80%' }}
						myStyle={{ color: 'white' }}
					/>
				</View>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

function dispatchToProps(dispatch) {
	return {
		increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
		decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
	};
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(CounterApp);
