import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Components/Header';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={{ backgroundColor: 'red', flex: 1 }}>
				<Header title={'=HOME='} />
				<Text> Home </Text>
			</View>
		);
	}
}
