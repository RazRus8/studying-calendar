(function()
{
    "use strict";

    app.controller("managerStudentsController", function($route, navbarService, managerGroupService, managerStudentService)
    {
        console.log("manager students page controller is working");

        // enable icons in navbar
        navbarService.setIcons("/data/views/icons.html");

        // disable tabs in navbar
        navbarService.setTabs("/data/views/tabs/managerTabs.html");

        // set class for position of datetime in navbar
        navbarService.setClass("mr-3");

        // set active tab
        navbarService.setTab1("tab1");
        navbarService.setTab2("tab2");
        navbarService.setTab3("tab3");
        navbarService.setTab4("tab4-active");
        navbarService.setTab5("tab5");

        // add students to the group block
        // groups for select element
        this.groupsAdd = managerGroupService.getAllGroups();

        // available students for select element
        this.studentsAdd = managerStudentService.getAvailableStudents();

        // selected options in select elements
        this.selectedGroupAdd = this.groupsAdd.groups;
        this.selectedStudentAdd = this.studentsAdd.students;

        this.addStudentToGroup = function()
        {
            if (this.selectedGroupAdd !== undefined && this.selectedStudentAdd !== undefined)
            {
                var studentgroup = 
                {
                    StudentId: parseInt(this.selectedStudentAdd),
                    GroupId: parseInt(this.selectedGroupAdd)
                }

                managerStudentService.addStudentToGroup(studentgroup)
                
                $route.reload();
            }
        }
        
        // remove students from the group block
        // groups for select element
        this.groupsRemove = managerGroupService.getAllGroups();
        
        // students for select element
        this.studentsRemove = [];
        this.selectedForRemove = this.groupsRemove.groups;

        this.selectChange = function()
        {
            if (this.selectedForRemove != null)
            {
                this.studentsRemove = managerStudentService.getStudentsFor(this.selectedForRemove);
            }
            else
            {
                this.studentsRemove = [];
            }
        }

        this.deleteStudent = function(student)
        {
            // remove student from list
            this.studentsRemove.students.splice(this.studentsRemove.students.indexOf(student), 1);

            var studentToDelete = {Id: parseInt(student.Id)};
            managerStudentService.deleteStudentFromGroup(studentToDelete);
            
            this.studentsAdd.students.push(student);
        }
    });
}());