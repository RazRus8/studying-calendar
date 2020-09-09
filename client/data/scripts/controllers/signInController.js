(function()
{
    "use strict";

    // controller for sign in page
    app.controller("signInController", function($location, signInService, navbarService, userService)
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

                if (value.status == 200 && value.data.Role == 1)
                {
                    console.log("User role: student.", "User:", value.data.FirstName, value.data.LastName, "User id:", value.data.Id);
                    userService.setUser(value.data.Id);
                    $location.url("/home/student/" + value.data.Id);
                }
                else if (value.status == 200 && value.data.Role == 2)
                {
                    console.log("User role: teacher.", "User:", value.data.FirstName, value.data.LastName, "User id:", value.data.Id);
                    userService.setUser(value.data.Id);
                    $location.url("/home/teacher/" + value.data.Id);
                }
                else if (value.status == 200 && value.data.Role == 3)
                {
                    console.log("User role: manager.", "User:", value.data.FirstName, value.data.LastName, "User id:", value.data.Id);
                    userService.setUser(value.data.Id);
                    $location.url("/home/manager");
                }
                
                // to do handle 404 status
            });
        }
    });
}());