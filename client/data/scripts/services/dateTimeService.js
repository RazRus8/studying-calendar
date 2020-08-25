(function()
{
    "use strict";

    app.service("dateTimeService", function()
    {
        var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date();

        this.dateTime = weekdays[date.getDay()] + " " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    });
}());