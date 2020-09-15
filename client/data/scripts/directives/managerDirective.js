(function()
{
    "use strict";

    app.directive("managerDirective", function(managerHomeService)
    {
        // returns array with data from server and mark days with info
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
                var dayInfo = [];

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
                    
                    // works only for active date buttons
                    if (elem.attr("id") !== undefined && (elem[0].className == "active-date" || elem[0].className == "selected-date"))
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
                            var svg = `<img id="del" src="./data/ExternalLinks/bootstrap-icons-1.0.0-alpha5/trash.svg" alt="" width="19em" height="19em"></img>`;
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
                                elem.children().append(`<div data-id="${id}" class="info-block" style="margin-bottom: 4%;"><div class="info-text">${info}</div>${svg}</div>`);
                            }
                            else
                            {
                                elem.children().append(`<div data-id="${id}" class="info-block"><div class="info-text">${info}</div>${svg}</div>`);
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

                element.on("click", "#del", function(event)
                {
                    var sel = angular.element(event.target).parent();
                    var id = {Id: parseInt(sel.attr("data-id"))};
                    var day;
                    sel.remove();

                    for (var item of dayInfo)
                    {
                        day = parseInt(new Date(item.LectureDateTimeStart).getDate());

                        if (item.Id == id.Id)
                        {
                            var index = dayInfo.indexOf(item);
                            dayInfo.splice(index, 1);
                        }
                    }


                    if (dayInfo.length == 0)
                    {
                        var elem = angular.element(document.getElementById(day));
                        elem.removeClass("active-date").addClass("cur-date");
                        elem.attr("data-info", "false");
                    }

                    var promiseObj = managerHomeService.deleteSchedule(id);

                    promiseObj.then(function(value)
                    {
                        console.log(`Response status: ${value.status}`);
                    });
                });
            }
        };
    });
}());