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
        controller: 'AboutController'
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
      .when('/people/', {
        templateUrl: 'people.html',
        controller: 'StaffListController'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonController'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaController'
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
      })
      .when('/webcam', {
        templateUrl: 'views/webcam.html',
        controller: 'WebcamController'
      })
      .when('/popupplayer', {
        templateUrl: 'views/popupplayer.html',
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