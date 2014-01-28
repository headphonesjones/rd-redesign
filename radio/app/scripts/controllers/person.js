'use strict';

angular.module('radioApp')

.controller('PersonController', function($scope, People){
        People.query(function(data) { $scope.people = data;});
});