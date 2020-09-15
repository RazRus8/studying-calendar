(function()
{
    "use strict";

    app.controller("teacherHomeController", function(navbarService, userService)
    {
        console.log("teacher page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/teacherTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set active tab
        navbarService.setTab1("tab1-active");
        navbarService.setTab2("tab2");

        // user info for greeting
        this.userInfo = userService.getUser();
    });
}());