using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Database.SELECT;
using studying_schedule.Database.UPDATE;
using studying_schedule.Models.Info;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class PasswordController : ControllerBase
    {
        [Route("api/changepassword")]
        [HttpPost]
        public ContentResult ChangePassword(ChangePasswordModel user)
        {
            bool result = UpdatePassword.Update(user);

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
                    StatusCode = (int)HttpStatusCode.NotAcceptable
                };
            }
        }
    }
}
