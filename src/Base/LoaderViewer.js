import React from 'react';
import LottieView from 'lottie-react-native';
const lottiePath = './../res/assests/loader.json';
export default class LoaderViewer extends React.Component {
	render() {
		return <LottieView source={require(lottiePath)} autoPlay loop />;
	}
}
