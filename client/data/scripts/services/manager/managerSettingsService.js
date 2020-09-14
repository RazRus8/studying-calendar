(function()
{
    "use strict";

    app.service("managerSettingsService", function($q, $http)
    {
        this.changePassword = function(user)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: user,
                url: "http://localhost:50157/api/changepassword"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            })
            .catch(function error(response)
            {
                deferred.resolve(response);
            });

            return deferred.promise;
        }
    });
}());