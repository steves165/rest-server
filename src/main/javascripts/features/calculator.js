(function() {
	'use strict';

	angular.module('calculator', [])

		.directive('calculatorBuild', ['$templateCache', function($templateCache) {
			return {
				replace: true,
				scope: {},
				template: $templateCache.get('calculator.html')
			};
		}])

		.directive('calcValue', function() {
			return {
				replace: false,
				scope: {
					calcValue: '@'
				},
				link: function($scope, $element) {
					$element.on('click', function() {
						$scope.$evalAsync(function() {
							if ($scope.$parent.$parent.calcTotal === '0') {
								$scope.$parent.$parent.calcTotal = $scope.calcValue;
							} else {
								$scope.$parent.$parent.calcTotal += $scope.calcValue;
							}
						});
					});
				}
			};
		})

		.directive('calcOperator', function() {
			return {
				replace: false,
				scope: {
					calcOperator: '@'
				},
				link: function($scope, $element) {
					$element.on('click', function() {
						$scope.$evalAsync(function() {
							if ($scope.$parent.$parent.calcTotal !== '0' && $scope.$parent.$parent.calcTotal !== '') {
								$scope.$parent.$parent.calcTotal += ' ' + $scope.calcOperator + ' ';
							}
						});
					});
				}
			};
		})

		.directive('calcEquals', function() {
			return {
				replace: false,
				scope: {},
				link: function($scope, $element) {
					var calcuate = function() {
						if ($scope.$parent.$parent.calcTotal !== '0' && $scope.$parent.$parent.calcTotal !== '' && !/\+\s$/.test($scope.$parent.$parent.calcTotal)) {
							$scope.$parent.$parent.calcTotal = eval($scope.$parent.$parent.calcTotal);
						}
					};

					$element.on('click', function() {
						$scope.$evalAsync(function() {
							calcuate();
						});
					});

					$('.main-value input').on('keypress', function(e) {
						if (e.keyCode === 13) {
							$scope.$evalAsync(function() {
								calcuate();
							});
						}
					})
				}
			}
		});

})();