using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IIS.Core;
using studying_schedule.Models.BaseUser;
using studying_schedule.Database.SELECT;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        [Route("api/signin")]
        [HttpPost]
        public ContentResult SignInUser(BaseUser user)
        {
            if (ModelState.IsValid)
            {
                int userRole = SelectData.ValidateUser(user);

                if (userRole != -1)
                {
                    return new ContentResult
                    {
                        Content = $"{userRole}",
                        ContentType = "application/json",
                        StatusCode = (int)HttpStatusCode.OK
                    };
                }
            }

            return new ContentResult
            {
                StatusCode = (int)HttpStatusCode.NotFound
            };
        }
    }
}
