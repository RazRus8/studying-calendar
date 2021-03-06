(function()
{
    "use strict";

    app.controller("navbarController", function(navbarService, dateTimeService, userService)
    {
        // initialize for using in other controllers
        this.navbarService = navbarService;
        
        // display date and time in navbar
        this.currentDateTime = dateTimeService.dateTime;

        // initialize for using in signin controller and on the tabs
        this.user = userService;
    });
}());