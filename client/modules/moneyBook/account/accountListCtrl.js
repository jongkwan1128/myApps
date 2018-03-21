/**
 * Created by 김종관 on 2018-03-21.
 */
angular.module('app').controller('accountListCtrl', function ($scope) {
	$scope.accountList = [
		{
			a: 'aaa1',
			b: 'bbb1',
			c: 'ccc1'
		},
		{
			a: 'aaa2',
			b: 'bbb2',
			c: 'ccc2'
		},
		{
			a: 'aaa3',
			b: 'bbb3',
			c: 'ccc3'
		},
		{
			a: 'aaa4',
			b: 'bbb4',
			c: 'ccc4'
		},
		{
			a: 'aaa5',
			b: 'bbb5',
			c: 'ccc5'
		}
	];

	$scope.moveDetail = function (obj) {
		console.log(obj);
	}
});