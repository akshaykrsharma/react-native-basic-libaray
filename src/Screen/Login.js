import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {}

	render() {
		return <AppNavigation />;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
