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

.controller('AboutController', ['$scope', 'Managers', 'Awards', '$routeParams', 'Page', function($scope, Managers, Awards, $routeParams, Page){
	Page.setTitle('About');
	var startTab = $routeParams.tab || "managers"
	$scope.tabs = ['Managers', 'Contact', 'Mission Statement', 'Join Radio DePaul', 'Sponsor Radio DePaul', 'Awards and Recognition'];

	//Set tab to routeParams tab
	for(var i = 0; i < $scope.tabs.length; i++) {
		if($scope.tabs[i].toLowerCase().replace(/ /g,"_") == startTab) {
			$scope.tabs.active = ($scope.tabs[i]);
		}
	}
	Managers.query(function(data){$scope.managers = data;});
	Awards.query(function(data){$scope.awards = data;}); //401 error from the server
}]);