'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')

.factory('News', function($http, $routeParams){
  return {  
    query: function(callback) {
    $http.jsonp(apiUrl + 'news/?callback=JSON_CALLBACK').
    success(function(data, status, headers, config) {
         callback(data);
        });
  },
    get: function(callback) {
      $http.jsonp(apiUrl + 'news/'+$routeParams['id']+'.js?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
          callback(data);
    });
  }
}
});