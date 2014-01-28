'use strict';

angular.module('radioApp')

.controller('AboutController', [$scope, 'Managers', 'Awards', function($scope, Managers, Awards){
        Managers.query(function(data) { $scope.managers = data;});
        Awards.query(function(data){$scope.awards = data;}); //401 error from the server
}]);