var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope){
	$scope.form = {};

	$scope.addDatabase = function(){
		$scope.databases.push($scope.form);
		$scope.form = {};
	}

	$scope.databases = [];

	 $scope.remove=function(database){ 
      var index=$scope.databases.indexOf(database)
      $scope.databases.splice(index,1);     
    }

}]);