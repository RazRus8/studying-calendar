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

        $routeProvider.when("/home/manager/groups",
        {
            templateUrl: "data/views/manager/managerGroupsPage.html"
        });

        $routeProvider.when("/home/manager/lectures",
        {
            templateUrl: "data/views/manager/managerLecturesPage.html"
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

        // teacher routes
        $routeProvider.when("/home/teacher/:id",
        {
            templateUrl: "data/views/teacher/teacherHomePage.html"
        });

        $routeProvider.when("/home/teacher/:id/settings",
        {
            templateUrl: "data/views/teacher/teacherSettingsPage.html"
        });
    });
}());