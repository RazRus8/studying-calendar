using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using studying_schedule.Models;
using studying_schedule.Database.SELECT;
using studying_schedule.Database.INSERT;
using studying_schedule.Database.DELETE;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        [Route("api/createschedule")]
        [HttpPost]
        public ContentResult CreateSchedule(List<ScheduleModel> schedules)
        {
            if (ModelState.IsValid)
            {
                InsertSchedule.Insert(schedules);

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

        [Route("api/getschedule")]
        [HttpPost]
        public ContentResult GetSchedule(MonthYearModel monthYear)
        {
            if (ModelState.IsValid)
            {
                var minSchedule = SelectSchedule.SelectFor(monthYear);
                var fullSchedule = SelectSchedule.Convert(minSchedule);

                return new ContentResult
                {
                    Content = JsonSerializer.Serialize(fullSchedule),
                    ContentType = "application/json",
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
    }
}
