(function()
{
    "use strict";

    app.service("studentHomeService", function($q, $http)
    {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // set month for calendar
        this.setMonth = function(date)
        {   
            //var day = null;
            var monthIndex = date.getMonth();
            var month = months[date.getMonth()];
            var year = date.getFullYear();
            var monthYear = {};
            
            //monthYear["day"] = day;
            monthYear["monthIndex"] = monthIndex;
            monthYear["month"] = month;
            monthYear["year"] = year;

            return monthYear;
        }

        // set days for calendar
        this.setDays = function(date)
        {
            date.setDate(1);

            this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

            this.prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

            this.firstDayIndex = () =>
            {
                if (date.getDay() == 0)
                {
                    return 6 - date.getDay();
                }
                else
                {
                    return date.getDay() - 1;
                }
            }

            this.lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

            this.nextDays = 7 - this.lastDayIndex;

            this.days = "";

            for (var i = this.firstDayIndex(); i > 0; i--)
            {
                this.temp = this.prevLastDay - i + 1;
                this.days += `<div class="prev-date">${this.temp}</div>`;
            }

            for (var j = 1; j <= this.lastDay; j++)
            {
                this.days += `<div id="${j}" class="disabled-date">${j}</div>`;
            }

            for (var k = 1; k <= this.nextDays; k++)
            {
                this.days += `<div class="next-date">${k}</div>`;
            }
            
            return this.days;
        }

        // set height = width for days in calendar
        this.setHeight = function()
        {
            var days = document.getElementsByClassName("days");
            var size = days[0].children[0].clientWidth;

            for (var i = 0; i < days[0].children.length; i++)
            {
                days[0].children[i].setAttribute("style", "height: " + size + "px;");
            }
        }

        this.getSchedule = function(user)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: user,
                url: "http://localhost:50157/api/getschedulefor"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    });
}());