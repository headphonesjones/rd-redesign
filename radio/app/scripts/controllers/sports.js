'use strict';

angular.module('radioApp')

.controller('SportsController', function($scope, Sports){
	$scope.items = ['Home', 'Play-by-Play', 'Blue Demon Weekly', 'Schedule'];
	$scope.selection = $scope.items[0];

}