'use strict';

angular.module('radioApp')

.controller('AboutController', function($scope, Managers, Awards){
		$scope.items = ['Managers', 'Contact', 'Mission Statement', "Join Radio DePaul", "Sponsor", "Awards"];
  		$scope.selection = $scope.items[0];
        Managers.query(function(data) { $scope.managers = data;});
        Awards.query(function(data){$scope.awards = data;}); 
});