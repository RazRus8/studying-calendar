(function()
{
    "use strict";

    app.directive("studentDirective", function(studentHomeService, userService)
    {
        function getSchedule(param)
        {
            var month = param.monthIndex + 1;
            var user = 
            {
                UserId: parseInt(userService.getUser()),
                Month: month,
                Year: param.year
            }

            var promiseObj = studentHomeService.getSchedule(user);

            promiseObj.then(function(value)
            {
                console.log(value);

                if (value.data[0] !== undefined)
                {
                    for (var item of value.data)
                    {
                        var startDate = new Date(item.LectureDateTimeStart);
                        var endDate = new Date(item.LectureDateTimeEnd);
                        var elem = angular.element(document.getElementById(startDate.getDate()));
                        elem.removeClass("disabled-date").addClass("active-date");
                        
                        elem.attr("data-tooltip", `Group: ${item.StudentsGroupName}\nLecture: ${item.LectureName}\nLecturer: ${item.LecturerFullName}\nLecture start time: ${startDate.getHours()}:${startDate.getMinutes()}\nLecture end time: ${endDate.getHours()}:${endDate.getMinutes()}`);
                    }
                }
            });
        }

        return {
            link: function(scope, element, attrs)
            {
                var date = new Date();
                var days = studentHomeService.setDays(date);
                
                // object with month and year
                scope.monthYear = studentHomeService.setMonth(date);
                var daysMonthsYears = {};
                
                // generate calendar days
                element.append(days);

                // set height for day elements
                studentHomeService.setHeight();

                // load schedule from server
                getSchedule(scope.monthYear);

                function setDaysMonth(date)
                {
                    days = studentHomeService.setDays(date);
                    scope.monthYear = studentHomeService.setMonth(date);
                    element.empty();
                    element.append(days);
                    studentHomeService.setHeight();

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
            }
        };
    });
}());