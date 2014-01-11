angular.module('radioApp')

.controller('ShowListController', function($scope, Shows){
	Shows.query(function(data){
	    $scope.shows = data;
	});

	$scope.showSearchFilter = function (obj) {
	    var re = new RegExp($scope.showSearchText, 'i');
	    return !$scope.showSearchText || re.test(obj.title);
	}
})

.controller('ShowController', function($scope, Shows){
	Shows.get(function(data){
	    $scope.show = data;
	    console.log(data);
	});
});

