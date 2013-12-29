'use strict';

angular.module('radioApp')
  .controller('NavCtrl', function ($scope) {
	$scope.width = document.body.offsetWidth;  
    $scope.showNav = false;

  });
