(function()
{
    "use strict";

    app.service("signInService", function($http, $q)
    {
        // sign in for existing user
        this.signIn = function(user)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: user,
                url: "http://localhost:50157/api/signin"
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