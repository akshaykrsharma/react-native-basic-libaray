import React from 'react';
import { AppState } from 'react-native';

const demoFunction = function(Compo, prop) {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = { demoVal: 5, DemoVal3: 10 };
		}

		render() {
			return <Compo {...prop} {...this.state} id={'Testing'} />;
		}
	};
};

module.exports = {
	demoFunction
};
