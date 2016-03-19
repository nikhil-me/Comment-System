angular.module('commentApp')
	.controller("CommentsController",["$http","$scope","$timeout" ,function($http,$scope,$timeout){

		$scope.comments;
		$scope.comment;
		$scope.name;

		$scope.postComment = function(){
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
		};


		$scope.upvote = function(index){
			console.log($scope.comments[index].upvote);
			$http.post("/upvote",{"id" : $scope.comments[index]._id,"upvote" : $scope.comments[index].upvote+1})
	         .success(function(data){
	         	$scope.fetch();
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};

		$scope.downvote = function(index){
			$http.post("/downvote",{"id" : $scope.comments[index]._id,"downvote" : $scope.comments[index].downvote+1})
	         .success(function(data){
	         	$scope.fetch();
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};

		$scope.fetch = function(){
			$http.get("/fetch")
	         .success(function(data){
	         	console.log(data);
	         	$scope.comments = data;
	         })
	         .error(function(err){
	                 console.log(err);
	         });
		};

		$timeout($scope.fetch);

	}]);


