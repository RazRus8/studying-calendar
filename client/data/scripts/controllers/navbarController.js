(function()
{
    "use strict";

    app.controller("navbarController", function(navbarService, dateTimeService, userService)
    {
        // initialize for using in other controllers
        this.navbarService = navbarService;
        
        // display date and time in navbar
        this.currentDateTime = dateTimeService.dateTime;

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3 ml-auto");

        // initialize for using in signin controller and on the tabs
        this.user = userService;
    });
}());