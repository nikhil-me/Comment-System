angular.module('commentApp')
	.controller("CommentsController",["$http","$scope",function($http,$scope){

		$scope.comments=["abc","dfg"];
		$scope.comment;
		$scope.name;

		$scope.postComment = function(){
			alert($scope.comment +" "+ $scope.name);
		}

	}]);


