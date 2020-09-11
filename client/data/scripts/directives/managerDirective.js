(function()
{
    "use strict";

    app.directive("managerDirective", function(managerHomeService, $timeout)
    {
        function getSchedule(param)
        {
            var daysInfo = {};
            var month = param.monthIndex + 1;
            var monthYearParam = 
            {
                Month: month,
                Year: param.year
            }

            var promiseObj = managerHomeService.getSchedule(monthYearParam);

            promiseObj.then(function(value)
            {
                if (value.data[0] !== undefined)
                {
                    for (var item of value.data)
                    {
                        var date = new Date(item.LectureDateTimeStart);

                        if (daysInfo[date.getDate()] === undefined)
                        {
                            daysInfo[date.getDate()] = [];
                        }

                        var elem = angular.element(document.getElementById(date.getDate()));
                        elem.removeClass("cur-date").addClass("active-date");
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
                var days = managerHomeService.setDays(date);
                
                // object with month and year
                scope.monthYear = managerHomeService.setMonth(date);
                var daysMonthsYears = {};
                
                // generate calendar days
                element.append(days);

                // set height for day elements
                managerHomeService.setHeight();

                // load schedule from server
                var daysInfo = getSchedule(scope.monthYear);

                function setDaysMonth(date)
                {
                    days = managerHomeService.setDays(date);
                    scope.monthYear = managerHomeService.setMonth(date);
                    element.empty();
                    element.append(days);
                    managerHomeService.setHeight();

                    // load schedule from server
                    daysInfo = getSchedule(scope.monthYear);
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
                    else if (unit[0].className == "cur-date")
                    {
                        unit.removeClass("cur-date").addClass("selected-date");
                        
                        scope.$apply(() => 
                        {
                            var selectedDay = parseInt(unit.attr("id"));

                            var newMonthYear = {};
                            newMonthYear["day"] = selectedDay;
                            newMonthYear["monthIndex"] = scope.monthYear.monthIndex;
                            newMonthYear["month"] = scope.monthYear.month;
                            newMonthYear["year"] = scope.monthYear.year;
                            daysMonthsYears[selectedDay] = newMonthYear;

                            scope.daysMonthsYearsOfSelected = daysMonthsYears;
                        });
                    }
                    else if (unit[0].className == "active-date")
                    {
                        unit.removeClass("active-date").addClass("selected-date");
                        
                        scope.$apply(() => 
                        {
                            var selectedDay = parseInt(unit.attr("id"));

                            var newMonthYear = {};
                            newMonthYear["day"] = selectedDay;
                            newMonthYear["monthIndex"] = scope.monthYear.monthIndex;
                            newMonthYear["month"] = scope.monthYear.month;
                            newMonthYear["year"] = scope.monthYear.year;
                            daysMonthsYears[selectedDay] = newMonthYear;

                            scope.daysMonthsYearsOfSelected = daysMonthsYears;
                        });
                    }
                    else if (unit[0].className == "selected-date")
                    {
                        if (unit.attr("data-info") == "true")
                        {
                            unit.removeClass("selected-date").addClass("active-date");
                        }
                        else
                        {
                            unit.removeClass("selected-date").addClass("cur-date");
                        }

                        scope.$apply(() => 
                        {
                            var day = parseInt(unit.attr("id"));
                            delete daysMonthsYears[day];
                            scope.daysMonthsYearsOfSelected = daysMonthsYears;
                        });
                    }
                });

                element.on("mouseenter", `[data-info="true"]`, function(event)
                {
                    var elem = angular.element(event.target);

                    if (elem.attr("id") !== undefined)
                    {
                        var dayInfo = daysInfo[elem.attr("id")];

                        var display = "";

                        var counter = dayInfo.length;

                        for (var item of dayInfo)
                        {
                            var startHour = new Date(item.LectureDateTimeStart).getHours();
                            var startMinutes = new Date(item.LectureDateTimeStart).getMinutes();
                            var endHour = new Date(item.LectureDateTimeEnd).getHours();
                            var endMinutes = new Date(item.LectureDateTimeEnd).getMinutes();
                            --counter;

                            if ((startHour != 0 && endHour != 0) || (startHour == 0 && endHour != 0) || (startHour != 0 && endHour == 0))
                            {
                                var info = `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}\nTeacher: ${item.TeacherFullName}\nLecture start time: ${startHour}:${startMinutes}\nLecture end time: ${endHour}:${endMinutes}`;
                            }
                            else
                            {
                                var info = `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}\nTeacher: ${item.TeacherFullName}`;
                            }
                        
                            if (counter > 0)
                            {
                                display += `${info}\n-------------------------\n`;
                            }
                            else
                            {
                                display += `${info}`;
                            }    
                        }

                        var svg = `<img id="del" src="./data/ExternalLinks/bootstrap-icons-1.0.0-alpha5/trash.svg" alt="" width="19em" height="19em"></img>`
                        elem.append(`<span class="info"><span>${display}</span>${svg}</span>`);

                        //elem.append(`<span class="info">${display}</span>`);
                    }
                });

                // element.on("mouseenter", `[data-info="false"]`, function()
                // {
                //     angular.element(document.getElementsByClassName("info")).remove();
                // });

                // element.on("mouseleave", function()
                // {
                //     angular.element(document.getElementsByClassName("info")).remove();
                // });
            }
        };
    });
}());