import { USER_LOGIN } from '../types';

/**
 *
 * @param {argument which you want to send with api} args
 */

const loginUser = args => ({
	type: USER_LOGIN,
	payload: { ...args }
});

module.exports = {
	loginUser
};
