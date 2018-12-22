import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class Utils {
	static styleMerger(...styles) {
		return Object.assign({}, ...styles);
	}

	static isIphoneX() {
		return Platform.OS === 'ios' && (height == 812 || height == 896);
	}
}
