'use strict';

angular.module('radioApp')

.controller('MediaController', ['$scope','$http', 'Page', function($scope, $http, Page){
    Page.setTitle('Media');
        $scope.photosets = ['72157627431049317', '72157627556017792', '72157627638190531', '72157627555308552', '72157627431314949', '72157627431238035'];

}]);