(function()
{
    "use strict";

    app.service("managerGroupService", function($q, $http)
    {
        this.createGroup = function(newGroup)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: newGroup,
                url: "http://localhost:50157/api/creategroup"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        this.getGroups = function()
        {
            var deferred = $q.defer();
            var groups = {};

            $http({
                method: "GET",
                url: "http://localhost:50157/api/getgroups"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            var promiseObj = deferred.promise;
            
            promiseObj.then(function(value)
            {
                groups["groups"] = value.data;
            });

            return groups;
        }

        this.deleteGroup = function(group)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: group,
                url: "http://localhost:50157/api/deletegroup"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    });
}());