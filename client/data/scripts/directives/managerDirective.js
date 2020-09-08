(function()
{
    "use strict";

    app.directive("managerDirective", function(managerHomeService)
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
                        var startDate = new Date(item.LectureDateTimeStart);
                        var endDate = new Date(item.LectureDateTimeEnd);
                        var elem = angular.element(document.getElementById(startDate.getDate()));
                        elem.removeClass("cur-date").addClass("active-date");
                        
                        elem.attr("data-tooltip", `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}\nLecturer: ${item.LecturerFullName}\nLecture start time: ${startDate.getHours()}:${startDate.getMinutes()}\nLecture end time: ${endDate.getHours()}:${endDate.getMinutes()}`);
                        
                        // console.log(`Group: ${item.StudentsGroupName}`);
                        // console.log(`Lecture: ${item.LectureName}`);
                        // console.log(`Lecturer: ${item.LecturerFullName}`);
                        // console.log(`Lecture start time: ${startDate.getHours()}:${startDate.getMinutes()}`);
                        // console.log(`Lecture end time: ${endDate.getHours()}:${endDate.getMinutes()}`);

                        daysInfo[startDate.getDate()] = item;
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
                    else if (unit[0].className == "selected-date")
                    {
                        unit.removeClass("selected-date").addClass("cur-date");

                        scope.$apply(() => 
                        {
                            var day = parseInt(unit.attr("id"));
                            delete daysMonthsYears[day];
                            scope.daysMonthsYearsOfSelected = daysMonthsYears;
                        });
                    }
                });

                element.on("mouseenter", ".active-date", function(event)
                {
                    var dayInfo = daysInfo[angular.element(event.target).attr("id")];
                    //console.log(dayInfo);

                    //var info = `Group: ${dayInfo.StudentsGroupName} Lecture: ${dayInfo.LectureName} Lecturer: ${dayInfo.LecturerFullName}`;
                });
            }
        };
    });
}());