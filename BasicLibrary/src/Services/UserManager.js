import APIManager from './ApiManager';
import EndPoints from './EndPoints';
export default class UserManager {
	static apiCallLoginUser(params) {
		return APIManager.createPromise(EndPoints.CUSTOMER.GET_REQUEST, 'GET', params);
	}
}
