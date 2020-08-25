(function()
{
    "use strict";

    // enable or disable navbar icons
    app.service("navbarService", function()
    {
        var icons;
        var tabs;
        var dateTimeClass;

        // enable|disble icons in navbar
        this.setIcons = function(url)
        {
            this.icons = url;
            return icons;
        };

        // enable|disable tabs in navbar
        this.setTabs = function(url)
        {
            this.tabs = url;
            return tabs;
        }

        // set class for position of datetime in navbar
        this.setClass = function(classVal)
        {
            this.dateTimeClass = classVal;
            return dateTimeClass;
        }
    });
}());