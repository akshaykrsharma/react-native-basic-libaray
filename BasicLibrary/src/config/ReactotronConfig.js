'use strict';

import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';

Reactotron.configure({ name: 'BasicLibrary' })
	.useReactNative()
	.use(apisaucePlugin())
	.use(sagaPlugin());

Reactotron.log('hello rendering world');

const enableReactotron = (enable = true, config = {}) => {
	if (enable) {
		Reactotron.connect();
		Reactotron.clear();
	}
};

const sagaMonitor = Reactotron.createSagaMonitor();

console.tron = Reactotron;

export { enableReactotron, sagaMonitor };
