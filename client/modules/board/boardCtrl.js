/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').controller('boardCtrl', function ($scope, restApi) {
    console.log('testCtrl')

    $scope.addPost = function () {
        if ($scope.postBody) {
            restApi.board.post({
	            username: 'testUser',
	            body: $scope.postBody
            }).then(function (data) {
	            $scope.posts.unshift(data);
	                $scope.postBody = null;
            });
        }
    };

    restApi.board.get().then(function (posts) {
	    $scope.posts = posts;
    });

});
