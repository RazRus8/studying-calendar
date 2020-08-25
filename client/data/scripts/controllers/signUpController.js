(function()
{
    "use strict";

    // controller for sign up page
    app.controller("signUpController", function($location, signUpService, navbarService)
    {
        console.log("sign up controller is working");

        // disble icons in navbar
        navbarService.setIcons("");

        // disable tabs in navbar
        navbarService.setTabs("");

        // select initialization
        this.data = 
        {
            select: null
        }

        // send information of user to server for signing up
        this.signUp = function()
        {
            var user =
            {
                FirstName: this.firstName,
                LastName: this.lastName,
                Email: this.email,
                Password: this.password,
                Role: parseInt(this.data.select)
            }
            
            console.log(user);
            
            var promiseObj = signUpService.getSignUp(user);
            
            // for reading status of promise
            promiseObj.then(function(value)
            {
                console.log("Response status: ", value.status);

                if (value.status == 200)
                {
                    console.log("Redirection to sign in page");

                    $location.url("/signin");
                }
            });
        }
    });
}());