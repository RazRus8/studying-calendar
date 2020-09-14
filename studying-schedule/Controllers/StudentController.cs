using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Models;
using studying_schedule.Models.Info;
using studying_schedule.Database.SELECT;
using studying_schedule.Database.INSERT;
using studying_schedule.Database.DELETE;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [Route("api/getstudents")]
        [HttpGet]
        public ContentResult GetStudents()
        {
            var students = SelectStudent.SelectAvailable();

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(students),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [Route("api/getstudentsfor")]
        [HttpPost]
        public ContentResult GetStudentsFor(GroupModel group)
        {
            var students = SelectStudent.Select(group);

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(students),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [Route("api/addstudent")]
        [HttpPost]
        public ContentResult AddStudent(StudentsGroupsModel model)
        {
            if (ModelState.IsValid)
            {
                InsertStudent.Insert(model);

                return new ContentResult
                {
                    StatusCode = (int)HttpStatusCode.OK
                };
            }
            else
            {
                return new ContentResult
                {
                    StatusCode = (int)HttpStatusCode.InternalServerError
                };
            }
        }

        [Route("api/deletestudent")]
        [HttpPost]
        public ContentResult DelStudent(SafeUserModel student)
        {
            bool result = DeleteStudent.Delete(student);

            if (result)
            {
                return new ContentResult
                {
                    StatusCode = (int)HttpStatusCode.OK
                };
            }
            else
            {
                return new ContentResult
                {
                    StatusCode = (int)HttpStatusCode.BadRequest
                };
            }
        }
    }
}
