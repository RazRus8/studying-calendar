(function()
{
    "use strict";

    app.controller("navbarController", function(navbarService, dateTimeService)
    {
        // initialize for using in other controllers
        this.navbarService = navbarService;
        
        // display date and time in navbar
        this.currentDateTime = dateTimeService.dateTime;
    });
}());