angular.module('commentApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/post', {

		templateUrl: '/views/pages/topreleases/topreleases.html',
		controller: "TopReleasesController"
	})

});

angular.module('commentApp')
.run(function($rootScope, $location) {
    $rootScope.location = $location;
});