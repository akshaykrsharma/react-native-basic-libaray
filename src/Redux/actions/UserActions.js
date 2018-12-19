import { USER_LOGIN } from '../types';

/**
 *
 * @param {argument which you want to send with api} args
 */

function actionHelper(type, args) {
	return {
		type,
		...args
	};
}
const loginUser = args => actionHelper(USER_LOGIN, args);

module.exports = {
	loginUser
};
