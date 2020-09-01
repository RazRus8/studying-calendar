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

        // set select for hours and minutes
        this.time = managerSelectService.setTime();

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3-active");
        navbarService.setTab4("tab4");
        navbarService.setTab5("tab5");

        // add new group to the db
        this.createLecture = function()
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

        this.lectures = managerLectureService.getLectures();

        this.deleteLecture = function()
        {
            var id = parseInt(this.value);
            var lecture = {LectureId: id};

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
    });
}());