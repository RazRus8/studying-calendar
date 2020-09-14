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

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2-active");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5");

        // add new group to the db
        this.createGroup = function()
        {
            if (this.group != "" && this.group !== undefined)
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
        }

        // available groups for select elements
        this.groups = managerGroupService.getGroups();
        this.selectedGroup = this.groups.groups;

        // delete selected group from the db
        this.deleteGroup = function()
        {
            if (this.selectedGroup != null)
            {
                var group = {GroupId: parseInt(this.selectedGroup)};
    
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
        }
    });
}());