
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
        templateUrl: 'views/people.html',
        controller: 'PeopleListController'
      })
      .when('/person/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonController'
      })
      .when('/news/:id', {
        templateUrl: 'views/news.html',
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaController'
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


function loadJS(src, callback) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onreadystatechange = s.onload = function() {
        var state = s.readyState;
        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };
    document.getElementsByTagName('head')[0].appendChild(s);
}
