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
	ACCOUNT: 'account',
	ACCOUNT_LIST: 'accountList',
	ACCOUNT_DETAIL: 'accountDetail',
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

	// $stateProvider.state({
	// 	name: routeName.ACCOUNT,
	// 	url: '/account',
	// 	abstract: true,
	// 	parent: routeName.MONEY_BOOK,
	// 	template: '<div ui-view></div>'
	// });
	//
	// $stateProvider.state({
	// 	name: routeName.ACCOUNT_LIST,
	// 	url: '/list',
	// 	parent: routeName.ACCOUNT,
	// 	templateUrl: '/modules/moneyBook/account/accountList.html',
	// 	controller: 'accountListCtrl'
	// });
	//
	// $stateProvider.state({
	// 	name: routeName.ACCOUNT_DETAIL,
	// 	url: '/detail',
	// 	parent: routeName.ACCOUNT,
	// 	templateUrl: '/modules/moneyBook/account/accountDetail.html',
	// 	controller: 'accountDetailCtrl'
	// });

	$stateProvider
		.state({
			name: routeName.ACCOUNT,
			url: '/account',
			abstract: true,
			parent: routeName.MONEY_BOOK,
			template: '<div ui-view></div>'
		})
		.state({
			name: routeName.ACCOUNT_LIST,
			url: '/list',
			parent: routeName.ACCOUNT,
			templateUrl: '/modules/moneyBook/account/accountList.html',
			controller: 'accountListCtrl'
		})
		.state({
			name: routeName.ACCOUNT_DETAIL,
			url: '/detail',
			parent: routeName.ACCOUNT,
			templateUrl: '/modules/moneyBook/account/accountDetail.html',
			controller: 'accountDetailCtrl'
		});


	$urlRouterProvider.otherwise('/');
});
