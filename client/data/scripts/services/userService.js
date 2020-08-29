(function()
{
    "use strict";

    app.service("userService", function()
    {
        var user;

        this.setUser = (user) =>
        {
            this.user = user;
        }

        this.getUser = () =>
        {
            return this.user;
        }
    });
}());