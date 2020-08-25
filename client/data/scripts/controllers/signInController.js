(function()
{
    "use strict";

    // controller for sign in page
    app.controller("signInController", function($location, signInService, navbarService)
    {
        console.log("sign in controller is working");

        // disble icons in navbar
        navbarService.setIcons("");

        // disable tabs in navbar
        navbarService.setTabs("");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3 ml-auto");

        this.signIn = function()
        {
            var user =
            {
                Email: this.email,
                Password: this.password
            }
            
            console.log(user);
            
            var promiseObj = signInService.signIn(user);

            // for reading status of promise
            promiseObj.then(function(value)
            {
                console.log("Response status: ", value.status);

                if (value.status == 200)
                {
                    console.log("Redirection to home page");

                    $location.url("/home");
                }
            });
        }
    });
}());