(function()
{
    "use strict";

    app.controller("studentHomeController", function(navbarService, userService)
    {
        console.log("student page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/studentTabs.html");

        // set active tab
        navbarService.setTab1("tab1-active");
        navbarService.setTab2("tab2");

        // user info for greeting
        this.userInfo = userService.getUser();
    });
}());