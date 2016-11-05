angular.module('todoist', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.otherwise({redirectTo: '/'});
});