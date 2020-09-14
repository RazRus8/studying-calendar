(function()
{
    "use strict";

    app.service("signInService", function($q, $http)
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
            })
            .catch(function error(response)
            {
                deferred.resolve(response);
            });

            return deferred.promise;
        }
    });
}());