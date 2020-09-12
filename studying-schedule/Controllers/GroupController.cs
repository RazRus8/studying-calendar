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
    public class GroupController : ControllerBase
    {
        [Route("api/creategroup")]
        [HttpPost]
        public ContentResult CreateGroup(GroupModel newGroup)
        {
            if (ModelState.IsValid)
            {
                InsertGroup.Insert(newGroup);

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

        [Route("api/getgroups")]
        [HttpGet]
        public ContentResult GetGroups()
        {
            var groups = SelectGroup.SelectAvailable();

            return new ContentResult
            {
                Content = JsonSerializer.Serialize(groups),
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.OK
            };
        }

        [Route("api/deletegroup")]
        [HttpPost]
        public ContentResult DelGroup(GroupModel group)
        {
            bool result = DeleteGroup.Delete(group);

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
