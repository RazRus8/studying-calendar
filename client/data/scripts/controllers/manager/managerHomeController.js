(function()
{
    "use strict";

    app.controller("managerHomeController", function(navbarService, managerSelectService, $scope)
    {
        console.log("manager home page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set select for hours and minutes
        this.time = managerSelectService.setTime();

        navbarService.setTab1("tab1-active");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5");

    });
}());