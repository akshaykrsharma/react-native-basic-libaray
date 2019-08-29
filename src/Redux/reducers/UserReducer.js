import { USER_LOGIN_SUCCESS, USER_ERROR, USER_LOGIN } from '../types';

const INITIAL_STATE = {
	data: null,
	isFetching: false,
	isCompleted: false,
	error: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return { ...state, isFetching: true };
		case USER_LOGIN_SUCCESS:
			return { ...state, data: action.data, isFetching: false, isCompleted: true, error: false };
		case USER_ERROR:
			return { ...state, data: action.data, isFetching: false, isCompleted: true, error: true };
		default:
			return state;
	}
};
