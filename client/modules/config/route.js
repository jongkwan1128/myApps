/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').constant('routeName', {
	BASE: 'base',
	LOGIN: 'login',
	LOGOUT: 'logout',
	INDEX: 'index',
	BOARD: 'board',
	MONEY_BOOK: 'moneyBook',
	TEST3: 'test3'
});

angular.module('app').config(function ($stateProvider, $urlRouterProvider, routeName) {
	$stateProvider.state({
		name: routeName.BASE,
		abstract: true,
		template: '<div ui-view=""></div>',
	});

	$stateProvider.state({
		name: routeName.LOGIN,
		url: '/login',
		parent: routeName.BASE,
		templateUrl: 'modules/login/login.html',
		controller: 'loginCtrl'
	});

	$stateProvider.state({
		name: routeName.LOGOUT,
		url: '/logout',
		parent: routeName.BASE,
		template: '<div>logout</div>',
		controller: function () {

		}
	});

	$stateProvider.state({
		name: routeName.INDEX,
		url: '/',
		parent: routeName.BASE,
		templateUrl: 'modules/index/index.html',
		resovle: {
			routeName: function (routeName) {
				return routeName;
			}
		},
		controller: 'indexCtrl'
	});

	$stateProvider.state({
		name: routeName.BOARD,
		url: 'board',
		parent: routeName.INDEX,
		templateUrl: '/modules/board/board.html',
		controller: 'boardCtrl'
	});

	$stateProvider.state({
		name: routeName.MONEY_BOOK,
		url: 'money_book',
		parent: routeName.INDEX,
		templateUrl: '/modules/moneyBook/moneyBook.html',
		controller: 'moneyBookCtrl'
	});

	$urlRouterProvider.otherwise('/');
});
