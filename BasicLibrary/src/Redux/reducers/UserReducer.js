import { USER_LOGIN_SUCCESS } from '../types';

const INITIAL_STATE = {
	user: undefined
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return { ...state, user: action.user };
		default:
			return state;
	}
};
