angular.module('radioApp')

.directive('pagination', function() {
        return {
                template: '<div id="pagination-container">' +
                          '<ul class="pagination" ng-hide="numPages() < 2">' + 
                          '<li ng-class="{disabled: currentPage == 0}" ng-click="gotoPage(1)">«</li>' +
                          '<li ng-class="{disabled: currentPage == 0}" ng-click="prevPage()"><</li>' +
                              '<li ng-repeat="page in pages" ng-class="{active: currentPage+1 == page}"" ng-click="gotoPage(page)">{{page}}</li>' +
                  '<li ng-class="{disabled: currentPage>= numPages() - 1}" ng-click="nextPage()">></li>' +
                  '<li ng-class="{disabled: currentPage>= numPages() - 1}" ng-click="gotoPage(numPages())">»</li></ul>' +
                  '</div>',
                replace: 'true',
                restrict: 'EA',
                scope: {
                        pageSize: '=',
                        count: '=',
                },
            link: function($scope, element, attrs) {
                        $scope.$parent.currentPage = $scope.currentPage = 0;
                        $scope.$parent.pageSize = $scope.pageSize;
                        $scope.$watch('count', function() {
                                $scope.$parent.currentPage = $scope.currentPage = 0;
                            var range = [];
                                for(var i=0;i<$scope.numPages();i++) {
                                  range.push(i+1);
                                }
                                $scope.pages = range;
                        });

                        $scope.numPages = function () {
                                return Math.ceil($scope.count / $scope.pageSize); 
                        }
                        $scope.nextPage = function () {
                                if ($scope.numPages() > $scope.currentPage + 1) {
                                        $scope.$parent.currentPage = $scope.currentPage = $scope.currentPage + 1;
                                }
                        }
                        $scope.prevPage = function () {
                                if ($scope.currentPage - 1 > 0) {
                                        $scope.$parent.currentPage = $scope.currentPage = $scope.currentPage - 1;                                
                                }
                        }
                        $scope.gotoPage = function (page) {
                                $scope.$parent.currentPage = $scope.currentPage = page - 1;                                
                        }


                }                
        }
});

