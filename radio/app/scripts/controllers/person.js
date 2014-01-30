'use strict';

angular.module('radioApp')

.controller('PersonController', function($scope, Person){
        Person.query(function(data) { $scope.person = data;});
});