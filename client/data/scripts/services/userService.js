(function()
{
    "use strict";

    app.service("userService", function()
    {
        // stringify object and store it to the local storage
        this.setUser = function(user)
        {
            localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(user));
        }
        
        // parse string to the object and get it
        this.getUser = function()
        {
            return JSON.parse(localStorage.getItem("user"));
        }
    });
}());