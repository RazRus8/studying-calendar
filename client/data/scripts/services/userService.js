(function()
{
    "use strict";

    app.service("userService", function()
    {
        var user;

        this.setUser = function(newUser)
        {
            user = newUser;
        }

        this.getUser = function()
        {
            return user;
        }
    });
}());