'use strict';

import { call, put, take, fork } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_ERROR } from '../types';
import { UserManager } from '../../Services';

// ****************
// WORKERS
// ****************
function* workerLoginUser(action) {
	console.warn('watcher', action);

	try {
		const { email, password } = action;
		console.warn('action', JSON.stringify(action, null, 2));
		const response = yield UserManager.apiCallLoginUser({ instructor: { email, password } });
		//const response = yield UserManager.apiCallLoginUser({ email, password });
		console.warn('Response=', response.data);
		yield put({ type: USER_LOGIN_SUCCESS, data: response.data });
	} catch (e) {
		console.warn('error', JSON.stringify(e.response.data));
		yield put({ type: USER_ERROR, data: e.response.data });
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
