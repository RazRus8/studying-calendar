using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Database.SELECT;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [Route("api/getlecturers")]
        [HttpGet]
        public ContentResult GetLecturers()
        {
            var lecturers = SelectUser.SelectAllLecturers();

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(lecturers),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }
    }
}
