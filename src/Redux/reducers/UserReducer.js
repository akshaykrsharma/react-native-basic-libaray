import { USER_LOGIN_SUCCESS } from '../types';

const INITIAL_STATE = {
	user: undefined
};

export default (state = INITIAL_STATE, action) => {
	console.warn('inside reducers', action);
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return { ...state, data: action.data };
		default:
			return state;
	}
};
