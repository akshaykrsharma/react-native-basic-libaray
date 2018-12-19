import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedTabIndex: 0 };
		//this.data = this.props.data;
		this.data = ['Tab1', 'Tab2', 'Tab3'];
	}

	callTabChanged = function(index) {
		this.setState({ selectedTabIndex: index });
		this.props.onTabSelection(index);
	};

	renderTabItem = function(item, index) {
		return (
			<TouchableOpacity
				onPress={() => this.callTabChanged(index)}
				style={{
					backgroundColor: index == this.state.selectedTabIndex ? 'red' : 'white',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: 40,
					flex: 1 / this.data.length
				}}
			>
				<Text>{item}</Text>
			</TouchableOpacity>
		);
	};

	renderTab = function() {
		return (
			this.data && (
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
					{this.data.map((item, index) => {
						return this.renderTabItem(item, index);
					})}
				</View>
			)
		);
	};

	render() {
		return <View style={styles.container}>{this.renderTab()}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
