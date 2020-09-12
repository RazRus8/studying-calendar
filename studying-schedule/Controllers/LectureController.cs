using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Models;
using studying_schedule.Database.SELECT;
using studying_schedule.Database.INSERT;
using studying_schedule.Database.DELETE;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class LectureController : ControllerBase
    {
        [Route("api/createlecture")]
        [HttpPost]
        public ContentResult CreateLecture(LectureModel newLecture)
        {
            if (ModelState.IsValid)
            {
                InsertLecture.Insert(newLecture);

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

        [Route("api/getalllectures")]
        [HttpGet]
        public ContentResult GetAllLectures()
        {
            var lectures = SelectLecture.SelectAll();

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(lectures),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [Route("api/getlectures")]
        [HttpGet]
        public ContentResult GetLectures()
        {
            // select lectures unused in schedule
            var lectures = SelectLecture.SelectAvailable();

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(lectures),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [Route("api/deletelecture")]
        [HttpPost]
        public ContentResult DelLecture(LectureModel lecture)
        {
            bool result = DeleteLecture.Delete(lecture);

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
