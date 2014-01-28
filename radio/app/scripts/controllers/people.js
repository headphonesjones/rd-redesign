'use strict';

angular.module('radioApp')

.controller('StaffListController', ['$scope', 'Staff', 'Page', function($scope, Staff, Page){
    Page.setTitle('Staff');
    $scope.currentPage = 0;
    $scope.pageSize = 10;

    $scope.filter = function() {
                 $scope.currentPage = 0;
    };
        Staff.query(function(data){
                $scope.staff = data;
                $scope.numberOfPages=function(){
                return Math.ceil($scope.staff.length/$scope.pageSize);                
            }
        });

        $scope.staffSearchFilter = function (obj) {
            var re = new RegExp($scope.staffSearchText, 'i');
            $scope.numberOfPages =function(){return Math.ceil($scope.filteredItems.length/$scope.pageSize)}; 
            return !$scope.staffSearchText || re.test(obj.name);
        };
}]);

