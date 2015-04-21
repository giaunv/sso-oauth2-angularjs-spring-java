/**
 * Created by Giau on 4/21/2015.
 */
angular.module('hello', [])
    .controller('home', function($scope, $http) {
        $http.get('/resource/').success(function(data) {
            $scope.greeting = data;
        })
    });
