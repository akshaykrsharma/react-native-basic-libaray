import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class CounterApp extends Component {
	// state = {
	// 	counter: 0
	// };

	// increaseCounter = () => {
	// 	this.setState({ counter: this.state.counter + 1 });
	// };

	// decreaseCounter = () => {
	// 	this.setState({ counter: this.state.counter - 1 });
	// };

	render() {
		return (
			<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
				<TouchableOpacity onPress={() => this.props.increaseCounter()}>
					<Text style={{ fontSize: 20, padding: 10 }}>INCREASE</Text>
				</TouchableOpacity>
				<Text style={{ fontSize: 20, padding: 10 }}>{this.props.counter}</Text>
				<TouchableOpacity onPress={() => this.props.decreaseCounter()}>
					<Text style={{ fontSize: 20, padding: 10 }}>DECREASE</Text>
				</TouchableOpacity>
			</View>
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
