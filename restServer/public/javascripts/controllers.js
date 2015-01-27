'use strict';

var app = angular.module('mainApp', ['ngMaterial', 'ngRoute']);

app.controller('MainCtrl', function($scope, $mdToast, $animate, $mdSidenav, $mdDialog, $interpolate, $timeout, restService) {

	$scope.toastPosition = {
		bottom: false,
		top: true,
		left: true,
		right: false
	};

	$scope.json = {
		main: ['TEMP']
	};

	$scope.contact = {
		name: '',
		email: '',
		content: ''
	};

	$scope.theBestVideo = 'sMKoNBRZM1M';

	function evalAsync(page) {
		$scope.$evalAsync(function() {
			restService.getRest(page).then(function(data) {
				applyRemoteData(data);
			});
		});
	}

	function applyRemoteData(json) {
		$scope.json = json;

		var j = json;
		var i = 0;

		json.main.forEach(function(data) {
			j.main[i] = $interpolate(data)($scope);
			i++;
		});

		$scope.json = j;

		var ind = 0;
		var dex = 0;

		$timeout(function() {
			$('.main-cont p').each(function(_, data) {
				$(data).html($scope.json.main[ind]);
				ind++;
			});
		});
    }

	// $scope.changePage = function(page, txt) {
	// 	evalAsync(page);
	// 	$scope.showActionToast(txt);
	// };

	$scope.toggleRight = function() {
		$mdSidenav('right').toggle();
	};

	$scope.getToastPosition = function() {
		return Object.keys($scope.toastPosition)
		.filter(function(pos) { return $scope.toastPosition[pos]; })
		.join(' ');
	};

	$scope.showActionToast = function(txt) {
		var toast = $mdToast.simple()
		.content(txt)
		.action('CLOSE')
		.highlightAction(false)
		.position($scope.getToastPosition());
		$mdToast.show(toast).then(function() {
			$mdToast.hide();
		});
	};

	$scope.showAdvanced = function(ev) {
		$mdDialog.show({
			controller: DialogController,
			templateUrl: '/javascripts/templates/dialog.html',
			targetEvent: ev,
		});
	};

	// $scope.changePage('home', 'Welcome to my website!');
});

app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $mdDialog) {
	$scope.close = function() {
		$mdSidenav('right').close();
	};

});

app.service('restService', function($http, $q) {

	return({
		getRest : getRest
	});

	function handleError( response ) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
        	!angular.isObject( response.data ) ||
        	!response.data.message
        	) {
        	return( $q.reject( "An unknown error occurred." ) );
    }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );
    }


    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {
    	return( response.data );
    }


    function getRest(page) {
    	var request = $http({
    		method: "post",
    		url: "/.rest/main?page=" + page
    	});

    	return(request.then(handleSuccess, handleError));
    }
});

app.directive('restSwitch', function() {
	return function($scope, $element) {
		$scope.changePage('youtube', 'Welcome to my Youtube channel');
	};
});

function DialogController($scope, $mdDialog) {
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
}