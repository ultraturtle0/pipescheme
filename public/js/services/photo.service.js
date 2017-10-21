angular.module('pipeScheme')
    .factory('PhotoService', ['$resource', function ($resource) {
        var service = {
            API: $resource('http://local.pipescheme.io:3000/api/photos', {
                _id: "@_id",
                location: "@location",
                owner: "@owner"
            })
        };

        return service;
    }]);
