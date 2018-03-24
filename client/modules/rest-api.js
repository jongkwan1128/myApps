/**
 * Created by 김종관 on 2018-03-13.
 */
angular.module('app')
	.constant('apiRoute', {
	LOGIN: 'login',
	LOGOUT: 'logout',
	USER: 'user',
	BOARD: 'board'
})
.service('restApi', function (Restangular, apiRoute) {
	let result = {};

	let apiEndPoint = '/';
	Restangular.setBaseUrl(apiEndPoint);

	let mainRoutes = [];

	let getApi = function (apiRoute) {
		if (!mainRoutes[apiRoute]) {
			mainRoutes[apiRoute] = Restangular.all(apiRoute);
		}
		return mainRoutes[apiRoute];
	};

	result.login = {};
	result.login.post = function (params) {
		let api = getApi(apiRoute.LOGIN);
		return api.post(params);
	};

	result.logout = {};
	result.logout.post = function () {
		let api = getApi(apiRoute.LOGOUT);
		return api.post();
	};

	result.user = {};
	result.user.post = function (params) {
		let api = getApi(apiRoute.USER);
		return api.post(params);
	};
	result.user.get = function (userId) {
		let api = Restangular.one(apiRoute.USER, userId);
		return api.get();
	};
	result.user.put = function (params) {
		let api = getApi(apiRoute.USER).one(params.id);
		return api.customPUT(params);
	};
	result.user.remove = function (userId) {
		let api = getApi(apiRoute.USER).one(userId);
		return api.remove(userId);
	};

	result.board = {};
	result.board.post = function (params) {
		let api = getApi(apiRoute.BOARD);
		return api.post(params);
	};
	result.board.get = function () {
		let api = getApi(apiRoute.BOARD);
		return api.customGET();
	};

	return result;

});