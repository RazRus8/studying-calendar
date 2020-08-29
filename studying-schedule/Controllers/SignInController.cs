using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using studying_schedule.Database.SELECT;
using studying_schedule.Models;

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
                UserModel model = Validation.ValidateUser(user);
                
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
