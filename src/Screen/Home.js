import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/Button';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={{ backgroundColor: 'white', flex: 1 }}>
				<Header title={'=HOME='} />

				<Button
					onPress={() => {
						this.props.navigation.goBack();
					}}
				>
					<Text> Go Back </Text>
				</Button>
			</View>
		);
	}
}
