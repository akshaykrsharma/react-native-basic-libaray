import React, { Component } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import LoaderViewer from './LoaderViewer';

export default class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { showLoading: false };
	}

	renderSpinner() {
		return (
			this.state.showLoading && (
				<Modal transparent={false} visible={this.state.showLoading}>
					<LoaderViewer />
				</Modal>
			)
		);
	}

	render() {
		return <View style={styles.container}>{this.renderSpinner()}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		//position: 'absolute'
	}
});
