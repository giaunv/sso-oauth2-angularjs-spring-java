/**
 * Created by Giau on 4/21/2015.
 */
angular.module('hello', [])
    .controller('home', function($scope) {
        $scope.greeting = {id: 'xxx', content: 'Hello World!'}
    })
