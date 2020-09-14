(function()
{
    "use strict";

    app.controller("managerSettingsController", function(navbarService, userService, managerSettingsService)
    {
        console.log("manager settings page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5-active");

        this.changePassword = function()
        {
            var oldpass1 = document.getElementById("old-pass-1");
            var oldpass2 = document.getElementById("old-pass-2");
            var newpass = document.getElementById("new-pass");

            //console.log(this.oldPassword1, this.oldPassword2, this.newPassword);

            if (this.oldPassword1 !== undefined && this.oldPassword2 !== undefined && this.newPassword)
            {
                var oldUser =
                {
                    Id: parseInt(userService.getUser()),
                    Password: this.oldPassword1
                }

                if (whiteSpaceCheck(this.oldPassword1))
                {
                    oldpass1.setCustomValidity(messages[2]);
                }
                else if (whiteSpaceCheck(this.oldPassword2))
                {
                    oldpass2.setCustomValidity(messages[2]);
                }
                else if (whiteSpaceCheck(this.newPassword))
                {
                    newpass.setCustomValidity(messages[2]);
                }
                
                if (this.oldPassword1 == this.oldPassword2)
                {
                    var user =
                    {
                        Id: parseInt(userService.getUser()),
                        OldPassword: this.oldPassword1,
                        NewPassword: this.newPassword
                    }

                    var promiseObj = managerSettingsService.changePassword(user);

                    promiseObj.then(function(value)
                    {
                        if (value.status != 200)
                        {
                            alert("Wrong old password");
                        }
                    });
                }
                else
                {
                    oldpass2.setCustomValidity(messages[1]);
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

        var messages =
        {
            0 : "Incorrect old password",
            1 : "Second password does not match the first password.",
            2 : "Password may contain letters, digits, special sybols and no whitespace."
        }
    });
}());