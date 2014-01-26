angular.module('radioApp')

.directive('pagination', function() {
        return {
                template: '<div class="row">' +
                          '<div class="small-11 small-centered large-4 large-centered columns" style="position: relative; top: 10px;">' +
                          '<ul class="pagination" ng-hide="numPages() < 2">' + 
                          '<li class="arrow" ng-class="{unavailable: currentPage == 0}" ng-click="prevPage()"><a href="">&laquo;</a></li>' +
                              '<li ng-repeat="page in pages" ng-class="{active: currentPage+1 == page}"" ng-click="gotoPage(page)"><a href="">{{page}}</a></li>' +
                  '<li class="arrow" ng-class="{unavailable: currentPage>= numPages() - 1}" ng-click="nextPage()"><a href="">&raquo;</a></li>' +
                  '</div>' +
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

