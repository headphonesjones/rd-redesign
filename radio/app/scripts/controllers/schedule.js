angular.module('radioApp')

.controller('ScheduleController', function($scope, Schedule){
    Schedule.query(function(data){
    	$scope.schedule = data;
    });
    $scope.days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    $scope.selected = $scope.days[new Date().getDay()];
});

