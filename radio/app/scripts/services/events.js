'use strict';
var apiUrl = 'http://radiodepaul.herokuapp.com/api/v2/';

angular.module('radioApp')
.factory('Events', function($http){
  return {
    query: function(callback) {
      $http.jsonp(apiUrl + 'events/?callback=JSON_CALLBACK').
      success(function(data, status, headers, config) {
            callback(data);
      });
    }
}
});