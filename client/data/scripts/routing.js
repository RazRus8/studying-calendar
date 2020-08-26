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

        // manager routes
        $routeProvider.when("/home/manager",
        {
            templateUrl: "data/views/manager/managerHomePage.html"
        });

        $routeProvider.when("/home/manager/students",
        {
            templateUrl: "data/views/manager/managerStudentsPage.html"
        });

        $routeProvider.when("/home/manager/settings",
        {
            templateUrl: "data/views/manager/managerSettingsPage.html"
        });

        // students routes
        $routeProvider.when("/home/student/:id",
        {
            templateUrl: "data/views/student/studentHomePage.html"
        });

        $routeProvider.when("/home/student/:id/settings",
        {
            templateUrl: "data/views/student/studentSettingsPage.html"
        });

        // lecturer routes
        $routeProvider.when("/home/lecturer/:id",
        {
            templateUrl: "data/views/lecturer/lecturerHomePage.html"
        });

        $routeProvider.when("/home/lecturer/:id/settings",
        {
            templateUrl: "data/views/lecturer/"
        });
    });
}());