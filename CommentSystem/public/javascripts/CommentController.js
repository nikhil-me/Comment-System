angular.module('commentApp')
	.controller("CommentsController",["$http","$scope","$timeout" ,function($http,$scope,$timeout){

		$scope.comments=["abc","dfg"];
		$scope.comment;
		$scope.name;

		$scope.postComment = function(){
			// alert($scope.comment +" "+ $scope.name);
			var details = {
				"username" : $scope.name,
				"body" : $scope.comment,
				"upvote" : 0,
				"downvote" : 0
			};

			$http.post("/insert",details)
	         .success(function(data){
	         	console.log(data);
	         	$scope.fetch();
	         	$scope.name="";
	         	$scope.comment="";
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		}

		$scope.fetch = function(){
			$http.get("/fetch")
	         .success(function(data){
	         	console.log(data);
	         	$scope.comments = data;
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		}

		$timeout($scope.fetch);

	}]);


