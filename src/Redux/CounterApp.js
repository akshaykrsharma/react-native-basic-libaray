import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Utils from '../Components/Utils';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import InputTextLayout from '../Components/TextFields/InputTextLayout';
import InputTextImage from '../Components/TextFields/InputTextImage';

import image from '../res/images';

import Header from '../Components/Header';
import List from '../Components/List';
import ApiManager from '../Services/ApiManager';
import EndPoints from '../Services/EndPoints';

import { loginUser } from './actions/UserActions';
import MainComponent from '../Base/MainComponent';
import TabBar from '../Components/Tab/TabBar';

class CounterApp extends MainComponent {
	constructor(props) {
		super(props);
		this.state = {
			errorMsg: null,
			selectedIndex: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		if (!!nextProps.data) {
			console.warn('LoginSuccessful:' + JSON.stringify(nextProps.data, null, 2));
			this.setState({ showLoading: false });
		}
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
		const errorMsg = 'please enter a valid password';
		console.warn('btn is Clicked ');
		this.setState({ showLoading: true });
		this.props.loginUser({ email: this.state.username, password: this.state.password });
		// ApiManager.getResponse(EndPoints.CUSTOMER.GET_REQUEST, 'GET', {}, (isSuccessful, response) => {
		// 	this.setState({ showSpinner: false });
		// 	if (isSuccessful) {
		// 		console.warn('response=', JSON.stringify(response, null, 2));
		// 	} else console.warn(JSON.stringify(response));
		// });
		//this.setState({ errorMsg });
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

	onTabSelection = function(index) {
		console.warn('index=', index);
		this.setState({ selectedIndex: index });
	};

	renderLoginScreen = function() {
		return (
			<View>
				<InputTextImage
					placeholder="User Name"
					image={image.icon_lock}
					keyboardType={'email-address'}
					onChangeText={username => {
						this.setState({ username });
					}}
				/>

				<InputTextImage
					placeholder="Password"
					image={image.icon_message}
					keyboardType={'decimal-pad'}
					isPassword={true}
					onChangeText={password => {
						this.setState({ password });
					}}
				/>
				{/* <InputTextLayout
		isPassword={true}
		label="Password"
		title="make it hard to crack"
		onChangeText={password => {
			this.setState({ password });
		}}
	/> */}

				<Button
					title={'SUBMIT'}
					onPress={this.onPress}
					containerStyle={{ marginTop: 30, width: '80%' }}
					myStyle={{ color: 'white' }}
				/>
			</View>
		);
	};

	renderSignUpScreen = function() {
		return (
			<View>
				<InputTextImage
					placeholder="First Name"
					image={image.icon_lock}
					//keyboardType={'email-address'}
					onChangeText={firstname => {
						this.setState({ firstname });
					}}
				/>
				<InputTextImage
					placeholder="Last Name"
					image={image.icon_lock}
					//keyboardType={'email-address'}
					onChangeText={lastname => {
						this.setState({ lastname });
					}}
				/>
				<InputTextImage
					placeholder="User Name"
					image={image.icon_lock}
					keyboardType={'email-address'}
					onChangeText={username => {
						this.setState({ username });
					}}
				/>
				<InputTextImage
					placeholder="Password"
					image={image.icon_message}
					keyboardType={'decimal-pad'}
					isPassword={true}
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
		);
	};

	render() {
		const data = ['LOG IN', 'SIGN UP'];
		return (
			<ScrollView>
				<View>
					<TabBar
						data={data}
						onTabSelection={index => this.onTabSelection(index)}
						selectedContainerStyle={{
							borderColor: 'silver'
							//borderBottomWidth: 1
						}}
						unSelectedContainerStyle={{ backgroundColor: 'white' }}
						selectedTextStyle={{
							color: 'black'
						}}
						unSelectedTextStyle={{ color: 'gray' }}
					/>
					{/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
						<TouchableOpacity onPress={() => this.props.increaseCounter()}>
							<Text style={{ fontSize: 20, padding: 10 }}>INCREASE</Text>
						</TouchableOpacity>
						<Text style={{ fontSize: 20, padding: 10 }}>{this.props.counter}</Text>
						<TouchableOpacity onPress={() => this.props.decreaseCounter()}>
							<Text style={{ fontSize: 20, padding: 10 }}>DECREASE</Text>
						</TouchableOpacity>
					</View> */}

					{this.state.selectedIndex == 0 ? this.renderLoginScreen() : this.renderSignUpScreen()}

					{this.renderSpinner()}
				</View>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	console.warn('state=', JSON.stringify(state));

	return {
		counter: state.counter,
		data: state.UserReducer.data
	};
}

function dispatchToProps(dispatch) {
	return {
		loginUser: args => dispatch(loginUser(args)),
		increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
		decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
	};
}

export default connect(
	mapStateToProps,
	dispatchToProps
)(CounterApp);