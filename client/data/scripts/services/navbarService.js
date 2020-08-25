(function()
{
    "use strict";

    // enable or disable navbar icons
    app.service("navbarService", function()
    {
        var icons;
        var tabs;

        this.setIcons = function(url)
        {
            this.icons = url;
            return icons;
        };

        this.setTabs = function(url)
        {
            this.tabs = url;
            return tabs;
        }
    });
}());