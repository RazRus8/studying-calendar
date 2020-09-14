(function()
{
    "use strict";

    app.controller("managerLecturesController", function($route, navbarService, managerSelectService, managerLectureService)
    {
        console.log("manager lectures page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3-active");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5");

        // add new lecture to the db
        this.createLecture = function()
        {
            if (this.lecture != "" && this.lecture !== undefined)
            {
                var newLecture = 
                {
                    LectureName: this.lecture
                }
    
                console.log(newLecture);
    
                var promiseObj = managerLectureService.createLecture(newLecture);
    
                promiseObj.then(function(value)
                {
                    console.log("Response status: ", value.status);
    
                    if (value.status == 200)
                    {
                        $route.reload();
                    }
                });
            }
        }

        // available lectures for select elements
        this.lectures = managerLectureService.getLectures();
        this.selectedLecture = this.lectures.lectures;

        // delete selected lecture from the db
        this.deleteLecture = function()
        {
            if (this.selectedLecture != null)
            {
                var lecture = {LectureId: parseInt(this.selectedLecture)};
    
                var promiseObj = managerLectureService.deleteLecture(lecture);  
    
                promiseObj.then(function(value)
                {
                    console.log("Response status: ", value.status);
    
                    if (value.status == 200)
                    {
                        $route.reload();
                    }
                });
            }
        }
    });
}());