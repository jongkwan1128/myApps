/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').controller('moneyBookCtrl', function ($scope, $state, routeName) {
	$scope.routeName = routeName;

	$scope.moveTab = function (stateName) {
		$state.go(stateName)
	};

	$scope.moveTab(routeName.ACCOUNT_LIST);

console.log('moneyBookCtrl')
});