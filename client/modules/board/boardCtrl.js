/**
 * Created by 김종관 on 2018-03-12.
 */
angular.module('app').controller('boardCtrl', function ($scope, $http) {
    console.log('testCtrl')

    $scope.addPost = function () {
        if ($scope.postBody) {
            $http.post('/api/board', {
                username: 'testUser',
                body: $scope.postBody
            }).then(function (post) {
                $scope.posts.unshift(post.data);
                $scope.postBody = null;
            })
        }
    };

    $http.get('/api/board').then(function (posts) {
        $scope.posts = posts.data;
    });



});
