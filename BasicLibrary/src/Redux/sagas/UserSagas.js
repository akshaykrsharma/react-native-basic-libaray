'use strict';

import { call, put, take, fork } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS } from '../types';
import { UserManager } from '../../Services';

// ****************
// WORKERS
// ****************
function* workerLoginUser(action) {
	console.warn('watcher', action);

	try {
		const { Email, Password } = action;
		const response = yield UserManager.apiCallLoginUser({ Email, Password });
		console.warn('Response=', response.data);
		yield put({ type: USER_LOGIN_SUCCESS, data: response.data });
	} catch (e) {
		console.warn(e);
		yield put({ type: USER_ERROR, data: e });
	}
}

// ****************
// WATCHERS
// ****************

const watcherLoginUser = function*() {
	while (true) {
		const action = yield take(USER_LOGIN);
		yield fork(workerLoginUser, action);
	}
};

module.exports = {
	watcherLoginUser
};
