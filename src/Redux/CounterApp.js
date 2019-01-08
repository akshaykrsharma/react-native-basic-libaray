import React, { Component } from 'react';
import { View, Text, Modal, Alert, ScrollView } from 'react-native';
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
import LoaderViewer from '../Base/LoaderViewer';

class CounterApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		const { data, error, isCompleted } = nextProps.user;

		if (error) {
			setTimeout(() => {
				Alert.alert('Error:', JSON.stringify(data, null, 2));
			}, 100);
		}
		if (!error && isCompleted) {
			//Navigate to Next Screen.
			this.props.navigation.navigate('Home');
		}
	}

	renderSpinner() {
		const { isFetching } = this.props.user;
		return (
			isFetching && (
				<Modal transparent={true} visible={isFetching}>
					<LoaderViewer />
				</Modal>
			)
		);
	}

	onPress = () => {
		this.props.loginUser({ email: this.state.username, password: this.state.password });
	};

	onAccessoryPress() {}

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
			<ScrollView style={{ backgroundColor: 'white' }}>
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
					{this.state.selectedIndex == 0 ? this.renderLoginScreen() : this.renderSignUpScreen()}
					{this.renderSpinner()}
				</View>
			</ScrollView>
		);
	}
}

function mapStateToProps(state) {
	return {
		counter: state.counter,
		user: state.UserReducer
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
