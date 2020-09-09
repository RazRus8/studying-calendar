(function()
{
    "use strict";

    app.controller("managerHomeController", function($scope, $route, navbarService, managerSelectService, managerGroupService, managerLectureService, managerHomeService)
    {
        console.log("manager home page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set select for hours and minutes
        this.startTime = managerSelectService.setTime();
        this.endTime = managerSelectService.setTime();

        // set active tab
        navbarService.setTab1("tab1-active");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5");

        // groups for select element
        this.groups = managerGroupService.getGroups();
        
        // lectures for select element
        this.lectures = managerLectureService.getLectures();

        // teachers for select element
        this.teachers = managerHomeService.getTeachers();

        this.createSchedule = function()
        {
            //object of day, months, years of selected
            var daysMonthsYears = $scope.daysMonthsYearsOfSelected;
            var schedules = [];

            if (daysMonthsYears !== undefined)
            {
                var values = Object.values(daysMonthsYears);

                if (this.startTime.hour === undefined || this.startTime.minute === undefined || this.endTime.hours === undefined || this.endTime.minute === undefined)
                {
                    for (var value of values)
                    {
                        var schedule = 
                        {
                            TeacherId: parseInt(this.Id),
                            StudentsGroup: parseInt(this.GroupId),
                            Lecture: parseInt(this.LectureId),
                            LectureDateTimeStart: new Date(value.year, value.monthIndex, value.day),
                            LectureDateTimeEnd: new Date(value.year, value.monthIndex, value.day)
                        }

                        schedules.push(schedule);
                    }
                }
                else
                {
                    var startHour = parseInt(this.startTime.hour.key);
                    var startMinutes = parseInt(this.startTime.minute.key);
                    var endHour = parseInt(this.endTime.hour.key);
                    var endMinutes = parseInt(this.endTime.minute.key);
                    
                    for (var value of values)
                    {
                        var schedule = 
                        {
                            TeacherId: parseInt(this.Id),
                            StudentsGroup: parseInt(this.GroupId),
                            Lecture: parseInt(this.LectureId),
                            LectureDateTimeStart: new Date(value.year, value.monthIndex, value.day, startHour, startMinutes, 0),
                            LectureDateTimeEnd: new Date(value.year, value.monthIndex, value.day, endHour, endMinutes, 0)
                        }

                        schedules.push(schedule);
                    }
                }
            }

            console.log(schedules);
            var promiseObj = managerHomeService.setSchedule(schedules);

            promiseObj.then(function(value)
            {
                console.log(`Response status: ${value.status}`);

                console.log($scope.monthYear);

                if (value.status == 200)
                {
                    $route.reload();
                }
            });
        }
    });
}());