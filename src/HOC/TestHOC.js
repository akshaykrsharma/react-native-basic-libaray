import React from 'react';
import { AppState } from 'react-native';

export const demoFunction = function(Compo) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { fromHocState1: 5, fromHocState2: 10 };
		}

		componentWillUnmount = function() {
			if (this.props.onTransition) {
				this.props.onTransition();
			}
			AppState.removeEventListener('change', this._handleAppStateChange);
		};

		componentDidMount = function() {
			this.setState({
				appState: AppState.currentState
			});
			AppState.addEventListener('change', this._handleAppStateChange.bind(this));
		};

		_handleAppStateChange = function(nextAppState) {
			if (this.state.appState && this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
				console.warn('current state=' + this.state.appState);
			}
			this.setState({ appState: nextAppState });
		};

		render() {
			return <Compo {...this.props} {...this.state} fromHocProps1={'Testing'} />;
		}
	};
};

// module.exports = {
// 	demoFunction
// };
