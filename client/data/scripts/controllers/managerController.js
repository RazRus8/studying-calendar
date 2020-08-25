(function()
{
    "use strict";

    app.controller("managerController", function(navbarService)
    {
        console.log("manager page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons/icons-enabled.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // to do
    });
}());