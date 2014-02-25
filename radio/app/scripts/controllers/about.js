'use strict';

angular.module('radioApp')

.controller('AboutController', function($scope, Managers, Awards){
		$scope.items = ['Managers', 'Contact', 'Mission Statement', "Join Radio DePaul", "Sponsor", "Awards", "Media"];
  		$scope.selection = $scope.items[0];
        Managers.query(function(data) { $scope.managers = data;});
        Awards.query(function(data){$scope.awards = data;}); 
        $scope.predicate = '-year';
        $scope.photosets = ['72157627431049317', '72157627556017792', '72157627638190531', '72157627555308552', '72157627431314949', '72157627431238035'];
});