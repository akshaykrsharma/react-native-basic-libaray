import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Utils from '../Components/Utils';
class CounterApp extends Component {
	constructor(props) {
		super(props);
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

	onPress() {
		console.warn('btn is Clicked');
	}

	render() {
		return (
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
				<Button title={'SUBMIT'} onPress={this.onPress} containerStyle={{ backgroundColor: 'blue' }} myStyle={{color:'yellow'}} />
				<Button title={'UPDATE'} onPress={this.onPress} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonStyle: {
		minWidth: 200,
		minHeight: 30,
		//shadowOffset: { width: 0, height: 5 },
		backgroundColor: '#00b0ff'
	},
	buttonTitleStyle: {
		color: 'rgba(255,255,255,1)',
		minHeight: 60
	},
	c: {
		minHeight: 40,
		backgroundColor: 'red'
	}
});

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
