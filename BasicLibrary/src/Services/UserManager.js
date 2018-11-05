import APIManager from './ApiManager';
import EndPoints from './EndPoints';
export default class UserManager {
	static loginUser(block, params) {
		return APIManager.getResponse(EndPoints.USER.LOGIN, 'GET', params, block);
	}
}
