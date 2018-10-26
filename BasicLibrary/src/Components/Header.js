import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Fonts from '../res/theme/Fonts';

export default class Header extends Component {
	onLeftPress = () => {
		this.props.onLeftPress();
	};
	render() {
		return (
			<View style={styles.headerStyle}>
				<View style={{ flex: 0.25 }}>
					{this.props.leftButton && (
						<TouchableOpacity onPress={this.props.onLeftPress}>
							<Text style={styles.leftTextStyle}>{this.props.leftButton}</Text>
						</TouchableOpacity>
					)}
				</View>
				<View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
					{this.props.title && <Text style={styles.headerTextStyle}> {this.props.title} </Text>}
				</View>
				<View style={{ flex: 0.25, alignItems: 'flex-end' }}>
					{this.props.rightButton && (
						<TouchableOpacity onPress={this.props.onRightPress}>
							<Text style={styles.leftTextStyle}>{this.props.rightButton}</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		);
	}
}

const styles = {
	headerStyle: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#FF5722',
		height: 50,
		alignItems: 'center',
		shadowColor: 'rgba(0,0,0,0.3)',
		shadowOffset: { width: 0, height: 1 }
	},
	headerTextStyle: {
		color: 'white',
		...Fonts.regularFont(16)
	},
	leftStyle: {},
	leftTextStyle: {
		color: 'white'
	}
};
