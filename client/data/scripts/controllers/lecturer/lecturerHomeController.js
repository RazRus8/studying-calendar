(function()
{
    "use strict";

    app.controller("lecturerController", function(navbarService)
    {
        console.log("lecturer page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/lecturerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");
    });
}());