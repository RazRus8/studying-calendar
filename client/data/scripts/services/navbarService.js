(function()
{
    "use strict";

    // enable or disable navbar icons
    app.service("navbarService", function()
    {
        var icons;
        var tabs;
        var dateTimeClass;
        var tab1;
        var tab2;
        var tab3;
        var tab4;
        var tab5;

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

        // set id for activation tab #1
        this.setTab1 = function(tab)
        {
            this.tab1 = tab;
            return tab1;
        }

        // set id for activation tab #2
        this.setTab2 = function(tab)
        {
            this.tab2 = tab;
            return tab2;
        }
        
        // set id for activation tab #3
        this.setTab3 = function(tab)
        {
            this.tab3 = tab;
            return tab3;
        }

        // set id for activation tab #4
        this.setTab4 = function(tab)
        {
            this.tab4 = tab;
            return tab4;
        }

        // set id for activation tab #5
        this.setTab5 = function(tab)
        {
            this.tab5 = tab;
            return tab5;
        }
    });
}());