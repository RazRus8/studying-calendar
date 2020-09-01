(function()
{
    "use strict";

    app.controller("managerGroupsController", function($route, navbarService, managerSelectService, managerGroupService)
    {
        console.log("manager groups page controller is working");

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
        navbarService.setTab2("tab2-active");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");

        // add new group to the db
        this.createGroup = function()
        {
            var newGroup = 
            {
                GroupName: this.group
            }

            console.log(newGroup);

            var promiseObj = managerGroupService.createGroup(newGroup);

            promiseObj.then(function(value)
            {
                console.log("Response status: ", value.status);

                if (value.status == 200)
                {
                    $route.reload();
                }
            });
        }

        this.groups = managerGroupService.getGroups();

        this.deleteGroup = function()
        {
            var id = parseInt(this.value);
            var group = {GroupId: id};

            var promiseObj = managerGroupService.deleteGroup(group);

            promiseObj.then(function(value)
            {
                console.log("Response status: ", value.status);

                if (value.status == 200)
                {
                    $route.reload();
                }
            });
        }
    });
}());