(function()
{
    "use strict";

    app.controller("teacherController", function(navbarService)
    {
        console.log("teacher page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/teacherTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");
    });
}());