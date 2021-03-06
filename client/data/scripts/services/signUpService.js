(function()
{
    "use strict";
    
    app.service("signUpService", function($http, $q)
    {
        // sign up for new user
        this.getSignUp = function(user)
        {
            var deferred = $q.defer();

            $http(
            {
                method: "POST", 
                data: user, 
                url: "http://localhost:50157/api/signup"
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