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
angular.module('radioApp').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://radiodepaul.s3.amazonaws.com/**']);
});