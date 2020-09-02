(function()
{
    "use strict";

    app.service("managerLectureService", function($q, $http)
    {
        this.createLecture = function(newLecture)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: newLecture,
                url: "http://localhost:50157/api/createlecture"
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

        this.getLectures = function()
        {
            var deferred = $q.defer();
            var lectures = {};

            $http({
                method: "GET",
                url: "http://localhost:50157/api/getlectures"
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
                lectures["lectures"] = value.data;
            });

            return lectures;
        }

        this.deleteLecture = function(lecture)
        {
            var deferred = $q.defer();

            $http({
                method: "POST",
                data: lecture,
                url: "http://localhost:50157/api/deletelecture"
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