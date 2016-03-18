angular.module('commentApp',['ngRoute'])
	.controller("MainCtrl",["$http","$scope",function($http,$scope){

		$scope.$on('$viewContentLoaded', function(){
			$('textarea#comment-box').characterCounter();
			$('input#input_text, textarea#textarea1').characterCounter();
		 });

		$scope.comments=["abc","dfg"];
		$scope.comment;

		$scope.addComment = function(commentForm){
			$scope.comments.push(commentForm);
		}

	}]);


