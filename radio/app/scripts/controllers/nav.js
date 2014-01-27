'use strict';

angular.module('radioApp')
  .controller('NavCtrl', function ($scope) {
	$scope.getWidth = function() {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	};

	$scope.$watch($scope.getWidth, function(newValue, oldValue) {
		$scope.width = newValue;
	});
	window.onresize = function() {
		$scope.$apply();
	};

	//$scope.width = document.body.offsetWidth;  
    $scope.showNav = false;

  });
