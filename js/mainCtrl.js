var app = angular.module('BloodSite');

app.controller('mainCtrl', function($scope, parseService){

	

	$scope.submitPost = function(){
		parseService.submitPost($scope.blog)
	}

	$scope.getPost = function(){
		parseService.getPost($scope.blog)
	}


});
