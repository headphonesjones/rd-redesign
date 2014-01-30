'use strict';

angular.module('radioApp')

.controller('PeopleListController', function($scope, People){
    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.filter = function() {
    $scope.currentPage = 0;
    };
    People.query(function(data){
            $scope.people = data;
            console.log($scope.people);
            $scope.numberOfPages=function(){
            return Math.ceil($scope.staff.length/$scope.pageSize);                
        }
    });

    $scope.staffSearchFilter = function (obj) {
        var re = new RegExp($scope.staffSearchText, 'i');
        $scope.numberOfPages =function(){return Math.ceil($scope.filteredItems.length/$scope.pageSize)}; 
        return !$scope.staffSearchText || re.test(obj.name);
    };
})

.controller('PersonController', function($scope, People){
    People.get(function(data) { $scope.person = data; console.log(data)});
});