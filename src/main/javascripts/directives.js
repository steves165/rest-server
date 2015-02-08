angular.module('mainApp')

	.directive('restSwitch', function() {
		return function($scope, $element) {
			$scope.changePage('youtube', 'Welcome to my Youtube channel');
		};
	});