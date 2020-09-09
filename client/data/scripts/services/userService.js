(function()
{
    "use strict";

    app.service("userService", function()
    {
        var user;

        this.setUser = function(newUser)
        {
            user = newUser;
            localStorage.removeItem("user");
            localStorage.setItem("user", user);
        }

        this.getUser = function()
        {
            user = localStorage.getItem("user");
            return user;
        }
    });
}());