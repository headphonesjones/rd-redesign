'use strict';

angular.module('radioApp')
  .controller('MainCtrl', function ($scope, Sponsors, News, Events) {
	Sponsors.query(function(data){
	    $scope.sponsors = data;
	});

	News.query(function(data){
	    $scope.news = data;
	});

	Events.query(function(data){
	    $scope.events = data;
	    console.log(data);
	});
  });