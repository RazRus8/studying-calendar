(function()
{
    "use strict";

    app.controller("managerStudentsController", function(navbarService, managerSelectService)
    {
        console.log("manager students page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set select for hours and minutes
        this.time = managerSelectService.setTime();

        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3-active");
        navbarService.setTab4("tab4");
    });
}());