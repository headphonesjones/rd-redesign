angular.module('radioApp')

.controller('ShowListController', function($scope, Shows){
	Shows.query(function(data){
	    var itemsPerRow = 4;
	    $scope.shows = data;
	    console.log($scope.shows);
	});

	$scope.showSearchFilter = function (obj) {
	    var re = new RegExp($scope.showSearchText, 'i');
	    return !$scope.showSearchText || re.test(obj.title);
	}
});
