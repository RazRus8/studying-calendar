(function()
{
    "use strict";

    app.controller("teacherSettingsController", function($route, navbarService, userService, passwordService)
    {
        console.log("teacher page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/teacherTabs.html");

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2-active");

        this.changePassword = function()
        {
            var oldpass1 = document.getElementById("t-old-pass-1");
            var oldpass2 = document.getElementById("t-old-pass-2");
            var newpass = document.getElementById("t-new-pass");

            if (this.oldPassword1 !== undefined && this.oldPassword2 !== undefined && this.newPassword)
            {
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
                    if (this.oldPassword1 != this.newPassword)
                    {
                        var user =
                        {
                            Id: parseInt(userService.getUser().Id),
                            OldPassword: this.oldPassword1,
                            NewPassword: this.newPassword
                        }
    
                        var promiseObj = passwordService.changePassword(user);
    
                        promiseObj.then(function(value)
                        {
                            if (value.status != 200)
                            {
                                alert("Incorrect old password.");
                            }
                            else
                            {
                                $route.reload();
                                alert("Password successfully changed.");
                            }
                        });
                    }
                    else
                    {
                        newpass.setCustomValidity(messages[3]);
                    }
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
            1 : "Second password does not match the first one.",
            2 : "Password may contain letters, digits, special sybols and no whitespace.",
            3 : "New password cannot be the same as the old one."
        }
    });
}());