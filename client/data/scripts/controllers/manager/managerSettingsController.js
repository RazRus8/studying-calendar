(function()
{
    "use strict";

    app.controller("managerSettingsController", function(navbarService, managerSelectService)
    {
        console.log("manager settings page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set select for hours and minutes
        this.time = managerSelectService.setTime();

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5-active");
    });
}());