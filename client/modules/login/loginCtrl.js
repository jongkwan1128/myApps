/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').controller('loginCtrl', function ($scope, restApi) {
	console.log('loginCtrl');

	$scope.isLogin = true;

	$scope.doLogin = function (user) {
		restApi.login.post(user).then(function (d) {
			console.log(d);
		})
	};

	$scope.createAccount = function (user) {
		restApi.user.post(user).then(function (d) {
			console.log(d)
		});
		console.log(user)
	};

	$scope.changeState = function () {
		$scope.isLogin = !$scope.isLogin;
	};

});