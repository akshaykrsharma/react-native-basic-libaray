import APIManager from './ApiManager';
import EndPoints from './EndPoints';
export default class UserManager {
	static apiCallLoginUser(params) {
		console.warn('params', JSON.stringify(params, null, 2));
		return APIManager.createPromise(EndPoints.CUSTOMER.LOGIN_REQUEST, 'POST', params);
	}
}
