(function()
{
    "use strict";

    // routes configuration
    app.config(function($routeProvider)
    {
        // sign in page route
        $routeProvider.when("/signin",
        {
            templateUrl: "data/views/signInPage.html"
        });
        
        // sign up page route
        $routeProvider.when("/signup",
        {
            templateUrl: "data/views/signUpPage.html"
        });

        // home page route
        $routeProvider.when("/home/manager",
        {
            templateUrl: "data/views/managerPage.html"
        });

        // to do:
        // add student page with student id
        // add lecturer page with lecturer id
    });
}());