export default class Utils {
	static styleMerger(...styles) {
		return Object.assign({}, ...styles);
	}
}
