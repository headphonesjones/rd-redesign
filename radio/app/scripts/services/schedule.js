'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')

.factory('Schedule', ['$http', function($http){
  var _onair;
  return {
    query: function(callback) {
      $http.jsonp(apiUrl + 'schedule/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    },
    onair: function(callback) {
      if (angular.isDefined(_onair)) {
        callback(_onair)
      } else {
        $http.jsonp(apiUrl + 'schedule/?on_air&callback=JSON_CALLBACK').
        success(function(data, status, headers, config) {
              _onair = data;
              callback(_onair);
        });
      }
    },    
  }}])