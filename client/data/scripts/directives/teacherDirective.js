(function()
{
    "use strict";

    app.directive("teacherDirective", function(teacherHomeService, userService)
    {
        function getSchedule(param)
        {
            var daysInfo = {};
            var month = param.monthIndex + 1;
            var user = 
            {
                UserId: parseInt(userService.getUser().Id),
                Month: month,
                Year: param.year
            }

            var promiseObj = teacherHomeService.getScheduleForTeacher(user);

            promiseObj.then(function(value)
            {
                if (value.data != null && value.data[0] !== undefined)
                {
                    for (var item of value.data)
                    {
                        var date = new Date(item.LectureDateTimeStart);

                        if (daysInfo[date.getDate()] === undefined)
                        {
                            daysInfo[date.getDate()] = [];
                        }

                        var elem = angular.element(document.getElementById(date.getDate()));
                        elem.removeClass("disabled-date").addClass("active-date");
                        elem.attr("data-info", "true");
                        daysInfo[date.getDate()].push(item);
                    }
                }
            });

            return daysInfo;
        }

        return {
            link: function(scope, element, attrs)
            {
                var date = new Date();
                var days = teacherHomeService.setDays(date);
                
                // object with month and year
                scope.monthYear = teacherHomeService.setMonth(date);
                var daysMonthsYears = {};
                
                // generate calendar days
                element.append(days);

                // set height for day elements
                teacherHomeService.setHeight();

                // load schedule from server
                var daysInfo = getSchedule(scope.monthYear);
                var dayInfo = [];

                function setDaysMonth(date)
                {
                    days = teacherHomeService.setDays(date);
                    scope.monthYear = teacherHomeService.setMonth(date);
                    element.empty();
                    element.append(days);
                    teacherHomeService.setHeight();

                    // load schedule from server
                    getSchedule(scope.monthYear);
                }

                scope.prev = function()
                {
                    date.setMonth(date.getMonth() - 1);
                    setDaysMonth(date);
                }

                scope.next = function()
                {
                    date.setMonth(date.getMonth() + 1);
                    setDaysMonth(date);
                }

                element.on("click", function(event)
                {
                    var unit = angular.element(event.target);

                    if (unit[0].className == "prev-date")
                    {
                        daysMonthsYears = {};
                        scope.$apply(() => scope.prev());
                    }
                    else if (unit[0].className == "next-date")
                    {
                        daysMonthsYears = {};
                        scope.$apply(() => scope.next());
                    }
                });

                element.on("mouseenter", `[data-info="true"]`, function(event)
                {
                    var elem = angular.element(event.target);
                    
                    // works only for active date buttons
                    if (elem.attr("id") !== undefined && elem[0].className == "active-date")
                    {
                        angular.element(document.getElementsByClassName("info")).remove();
                        dayInfo = daysInfo[elem.attr("id")];
                        var counter = dayInfo.length;

                        elem.append(`<div class="info"></div>`);

                        for (var item of dayInfo)
                        {
                            var id = item.Id;
                            var dts = new Date(item.LectureDateTimeStart);
                            var dte = new Date(item.LectureDateTimeEnd);
                            var startHour = dts.getHours();
                            var startMinutes = (dts.getMinutes() < 10 ? "0" : "") + dts.getMinutes();
                            var endHour = dte.getHours();
                            var endMinutes = (dte.getMinutes() < 10 ? "0" : "") + dte.getMinutes();
                            --counter;
                            
                            if ((startHour != 0 && endHour != 0) || (startHour == 0 && endHour != 0) || (startHour != 0 && endHour == 0))
                            {
                                var info = `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}\nLecture start time: ${startHour}:${startMinutes}\nLecture end time: ${endHour}:${endMinutes}`;
                            }
                            else
                            {
                                var info = `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}`;
                            }
                            
                            if (counter > 0)
                            {
                                elem.children().append(`<div data-id="${id}" class="info-block" style="margin-bottom: 4%;"><div class="info-text">${info}</div></div>`);
                            }
                            else
                            {
                                elem.children().append(`<div data-id="${id}" class="info-block"><div class="info-text">${info}</div></div>`);
                            }
                        }
                    }
                });

                element.on("mouseenter", `[data-info="false"]`, function()
                {
                    angular.element(document.getElementsByClassName("info")).remove();
                });

                element.on("mouseleave", function()
                {
                    angular.element(document.getElementsByClassName("info")).remove();
                });
            }
        };
    });
}());