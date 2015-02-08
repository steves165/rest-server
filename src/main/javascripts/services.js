angular.module('mainApp')

    .service('restService', function($http, $q) {

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