'use strict';

angular.module('radioApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleController'
      })
      .when('/shows', {
        templateUrl: 'views/shows.html',
        controller: 'ShowListController'
      })
      .when('/shows/:showId', {
        templateUrl: 'views/show.html',
        controller: 'ShowController'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
