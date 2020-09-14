(function()
{
    "use strict";

    app.service("managerStudentService", function($q, $http)
    {
        this.getAvailableStudents = function()
        {
            var deferred = $q.defer();
            var students = {};

            $http({
                method: "GET",
                url: "http://localhost:50157/api/getstudents"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            var promiseObj = deferred.promise;
            
            promiseObj.then(function(value)
            {
                students["students"] = value.data;
            });

            return students;
        }

        this.getStudentsFor = function(groupId)
        {
            var deferred = $q.defer();
            var group = {GroupId: parseInt(groupId)};
            var students = {};

            $http({
                method: "POST",
                data: group,
                url: "http://localhost:50157/api/getstudentsfor"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            var promiseObj = deferred.promise;
            
            promiseObj.then(function(value)
            {
                students["students"] = value.data;
            });

            return students;
        }

        this.addStudentToGroup = function(studentgroup)
        {
            var deferred = $q.defer();
            var students = {};

            $http({
                method: "POST",
                data: studentgroup,
                url: "http://localhost:50157/api/addstudent"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            var promiseObj = deferred.promise;
            
            promiseObj.then(function(value)
            {
                students["students"] = value.data;
            });

            return students;
        }

        this.deleteStudentFromGroup = function(student)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: student,
                url: "http://localhost:50157/api/deletestudent"
            })
            .then(function success(response)
            {
                deferred.resolve(response);
            },
            function error(response)
            {
                deferred.reject(response);
            });

            return deferred.promise;
        }
    });
}());