/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').constant('routeName', {
	BASE: 'base',
	LOGIN: 'login',
	LOGOUT: 'logout',
	INDEX: 'index',
	TEST: 'test',
	TEST2: 'test2',
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
		template: '<div>login</div>',
		controller: function () {

		}
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
		controller: function ($scope, routeName) {
			$scope.routeName = routeName;
			console.log('index2')
		}
	});

	$stateProvider.state({
		name: routeName.TEST,
		url: 'test',
		parent: routeName.INDEX,
		templateUrl: '/modules/test1/test.html',
		controller: 'testCtrl'
	});

	$stateProvider.state({
		name: routeName.TEST2,
		url: 'test2',
		parent: routeName.INDEX,
		templateUrl: '/modules/test2/test2.html',
		controller: 'test2Ctrl'
	});

	$urlRouterProvider.otherwise('/');
});

angular.module('app').run(function ($rootScope) {
	$rootScope.$on('$stateChangeError',
		function () {
			console.log(arguments);
			// function(event, toState, toParams, fromState, fromParams, error){
			//     console.log('resolve-error', error);
			//     console.log('resolve-error-event', event);
			//     console.log('resolve-error-event', event);
		});
});
