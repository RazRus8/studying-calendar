using System;
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Database.SELECT;
using studying_schedule.Models;
using studying_schedule.Models.Info;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        [Route("api/signin")]
        [HttpPost]
        public ContentResult SignInUser(UserModel user)
        {
            if (ModelState.IsValid)
            {
                var model = SelectPassword.ValidateUser(user);
                
                if (model != null)
                {
                    return new ContentResult
                    {
                        Content = JsonSerializer.Serialize(model),
                        ContentType = "application/json",
                        StatusCode = (int)HttpStatusCode.OK
                    };
                }

                return new ContentResult
                {
                    StatusCode = (int)HttpStatusCode.NotFound
                };
            }

            return new ContentResult
            {
                StatusCode = (int)HttpStatusCode.InternalServerError
            };
        }
    }
}
