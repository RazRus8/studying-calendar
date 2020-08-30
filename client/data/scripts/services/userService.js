(function()
{
    "use strict";

    app.service("userService", function()
    {
        var user;

        this.setUser = function(user)
        {
            this.user = user;
        }

        this.getUser = function()
        {
            return this.user;
        }
    });
}());