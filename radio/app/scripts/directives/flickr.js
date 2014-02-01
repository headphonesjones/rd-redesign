var flickr = angular.module('flickr', []);


flickr.directive('flickr', ['$http', function($http) {
  return {
    restrict: 'E',
      controller: ['$scope', function ($scope) {
        $scope.photos = []
        this.setPhotos = function(photos) {
          $scope.photos = photos;
          $scope.numberOfPhotos = $scope.photos.length;
          $scope.visible = true;
          $scope.photoIndex = 0
        }
        $scope.currentPhoto = function() {
          return $scope.photos[$scope.photoIndex];
        }
      }]
  }
}]);

flickr.directive('lightbox', function() {
  return {
    require: "^flickr",
    replace: true,
    restrict: 'E',
    templateUrl: 'views/lightbox.html',
  }
});

flickr.directive('photoset', ['$http', function($http) {
  return {
    require: "^flickr",
    replace: true,
    restrict: 'E',
    template: '<div class="large-4 small-6 columns">' +
                  '<h5 class="blue-text media-text">{{photoset.title._content}}</h5>' +
                  '<div class="thumbnail">' +
                     '<div class="thumbnail-image" ng-click="showPhotoset(photoset);">' +
                       '<img id="lightbox-image" width="293" height="210" ng-src="http://farm{{photoset.farm}}.static.flickr.com/{{photoset.server}}/{{photoset.primary}}_{{photoset.secret}}_m.jpg" width="215" />' +
                     '</div>' +
                 '</div>' +
               '</div>',
    scope: {
        id: '@'
    },
    link: function(scope, element, attrs, flickrCtrl) {
      $http.jsonp('http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getInfo&photoset_id=' + scope.id + '&api_key=8ba7f50062d534406009b45aeb73eb90&jsoncallback=JSON_CALLBACK').
       success(function(data, status, headers, config) {
      scope.photoset = data.photoset;
       });
    scope.showPhotoset = function (photoset) {
      $http.jsonp('http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=' + photoset.id + '&api_key=8ba7f50062d534406009b45aeb73eb90&jsoncallback=JSON_CALLBACK').
           success(function(data, status, headers, config) {
          flickrCtrl.setPhotos(data.photoset.photo);

           //prefetch images for gallery
           angular.forEach(data.photoset.photo, function(photo, key){
             var img = new Image();
             img.src = 'http://farm' + photo.farm +'.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret +'_b.jpg';
           });            
       }); 
    }
    }
  }

}]);