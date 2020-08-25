(function()
{
    "use strict";

    app.directive("managerDirective", function($compile, managerService)
    {
        return {        
            link: function(scope, element, attrs)
            {
                var date = new Date();
                var days = managerService.setDays(date);
                scope.month = managerService.setMonth(date);
                element.append(days);
                managerService.setHeight();

                function setDaysMonth(date)
                {
                    days = managerService.setDays(date);
                    scope.month = managerService.setMonth(date);
                    element.empty();
                    element.append(days);
                    managerService.setHeight();
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
                    var target = angular.element(event.target);

                    if (target[0].className == "prev-date")
                    {
                        scope.$apply(() => scope.prev());
                    }
                    else if (target[0].className == "next-date")
                    {
                        scope.$apply(() => scope.next());
                    }
                    else if (target[0].className == "cur-date")
                    {
                        target.removeClass("cur-date").addClass("active-date");
                    }
                    else if (target[0].className == "active-date")
                    {
                        target.removeClass("active-date").addClass("cur-date");
                    }
                });
            }
        };
    });
}());