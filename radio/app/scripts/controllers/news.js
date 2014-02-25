'use strict';

angular.module('radioApp')

.controller('NewsListController', function($scope, News){
	News.query(function(data){
	    $scope.news = data;
	    $scope.predicate = '-publication_date';
	});
})
