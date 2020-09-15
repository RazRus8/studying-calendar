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
        this.groups = managerGroupService.getAllGroups();
        
        // lectures for select element
        this.lectures = managerLectureService.getAllLectures();

        // teachers for select element
        this.teachers = managerHomeService.getTeachers();

        // variables for ng-models
        this.selectedGroup = this.groups.groups;
        this.selectedLecture = this.lectures.lectures;
        this.selectedTeacher= this.teachers.teachers;

        this.createSchedule = function()
        {
            //object of day, months, years of selected from calendar
            var daysMonthsYears = $scope.daysMonthsYearsOfSelected;
            var schedules = [];

            if (daysMonthsYears !== undefined && this.selectedGroup !== undefined && this.selectedLecture !== undefined && this.selectedTeacher !== undefined)
            {
                var values = Object.values(daysMonthsYears);

                if (this.startTime.hour === undefined || this.startTime.minute === undefined || this.endTime.hours === undefined || this.endTime.minute === undefined)
                {
                    for (var value of values)
                    {
                        var schedule = 
                        {
                            TeacherId: parseInt(this.selectedTeacher),
                            StudentsGroup: parseInt(this.selectedGroup),
                            LectureId: parseInt(this.selectedLecture),
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
                            TeacherId: parseInt(this.selectedTeacher),
                            StudentsGroup: parseInt(this.selectedGroup),
                            LectureId: parseInt(this.selectedLecture),
                            LectureDateTimeStart: new Date(value.year, value.monthIndex, value.day, startHour, startMinutes, 0),
                            LectureDateTimeEnd: new Date(value.year, value.monthIndex, value.day, endHour, endMinutes, 0)
                        }

                        schedules.push(schedule);
                    }
                }
                
                var promiseObj = managerHomeService.setSchedule(schedules);
    
                promiseObj.then(function(value)
                {
                    console.log(`Response status: ${value.status}`);
    
                    if (value.status == 200)
                    {
                        $route.reload();
                    }
                });
            }

        }
    });
}());