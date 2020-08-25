using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Database.INSERT;
using studying_schedule.Models;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        [Route("api/signup")]
        [HttpPost]
        public ContentResult SignUpUser(TempUserModel user)
        {
            if (ModelState.IsValid)
            {
                //InsertData.InsertTempUser(user);

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
    }
}