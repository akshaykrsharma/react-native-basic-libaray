//
// Copyright © 2017-Present, Punchh, Inc.
// All rights reserved.
//
'use strict';

import { all, fork } from 'redux-saga/effects';
import { watcherLoginUser } from './UserSagas';

export default function* rootSaga() {
	yield all([fork(watcherLoginUser)]);
}
