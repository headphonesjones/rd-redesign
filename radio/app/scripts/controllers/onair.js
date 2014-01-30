'use strict';

angular.module('radioApp')

.controller('OnAirController', function($scope, Schedule){
        Schedule.onair(function(data){
        for (var i = 0;i < 2;i++) {
            if (data[i].order === 0) {
                $scope.slot = data[i];
            } else {
                $scope.next_slot = data[i];
            }
        }
    });
});

