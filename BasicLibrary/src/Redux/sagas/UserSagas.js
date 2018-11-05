'use strict';

import { call, put, take, fork } from 'redux-saga/effects';
import { USER_LOGIN, USER_LOGIN_SUCCESS } from '../types';
import ApiManager from '../Services/ApiManager';
import EndPoints from '../Services/EndPoints';
import { UserManager } from '../../Services';

// ****************
// WORKERS
// ****************
function* workerLoginUser(action) {
	const { Email, Password } = action.loginMeta;
	try {
		const response = yield call(UserManager.loginUser, { Email, Password });
		yield put({ type: USER_LOGIN_SUCCESS, user: response });
	} catch (e) {
		action.errorhandler(e.response);
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
	watcherLoginUser,
	watcherRegisterUser
};
