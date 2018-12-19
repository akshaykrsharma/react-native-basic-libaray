import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';

import ApiManager from '../Services/ApiManager';
import EndPoints from '../Services/EndPoints';
import LoaderViewer from '../Base/LoaderViewer';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [], showSpinner: true };
	}

	componentWillMount() {
		console.warn('componentWillMount is called' + EndPoints.ADMIN.GET_REQUEST);
		ApiManager.getResponse(EndPoints.CUSTOMER.GET_REQUEST, 'GET', {}, (isSuccessful, response) => {
			this.setState({ showSpinner: false });
			if (isSuccessful) this.setState({ data: response });
			else console.warn(JSON.stringify(response));
		});
	}

	render() {
		return (
			<View>
				<Modal transparent={false} visible={this.state.showSpinner}>
					<LoaderViewer />
				</Modal>
				{this.state.data.map(item => {
					return (
						<Text
							style={{
								fontSize: 20,
								shadowColor: '#000',
								shadowOpacity: 0.1,
								margin: 2,
								padding: 10,
								backgroundColor: 'white',
								shadowOffset: { width: 0, height: 2 },
								elevation: 2
							}}
						>
							{item.title}
						</Text>
					);
				})}
			</View>
		);
	}
}
