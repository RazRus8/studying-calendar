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

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3 ml-auto");

        // select initialization
        this.data = 
        {
            selected: null
        }

        // send information of user to server for signing up
        this.signUp = function()
        {
            var pass = document.getElementById("sign-up-password");

            if (this.firstName !== undefined && this.lastName !== undefined && this.email !== undefined && this.data.selected !== undefined)
            {
                if (whiteSpaceCheck(this.password))
                {
                    pass.setCustomValidity("Password may contain letters, digits, special sybols and no whitespace.");
                }
                else
                {
                    var user =
                    {
                        FirstName: this.firstName,
                        LastName: this.lastName,
                        Email: this.email,
                        Password: this.password,
                        Role: parseInt(this.data.selected)
                    }
                    
                    var promiseObj = signUpService.getSignUp(user);
                    
                    // for reading promise status
                    promiseObj.then(function(value)
                    {
                        if (value.status == 200)
                        {
                            console.log("Redirection to sign in page");
            
                            $location.url("/signin");
                        }
                    });
                }
            }
        }

        var whiteSpaceCheck = function(string)
        {
            if (string.indexOf(" ") >= 0)
            {
                return true;
            }

            return false;
        }

    });
}());