using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Net;
using Microsoft.AspNetCore.Mvc;

using studying_schedule.Models;
using studying_schedule.Database.INSERT;

namespace studying_schedule.Controllers
{
    [Produces("application/json")]
    [ApiController]
    public class TempUserController : ControllerBase
    {
        [Route("api/createuser")]
        [HttpPost]
        public ContentResult RegisterUser(TempUserModel tempUser)
        {
            if (ModelState.IsValid)
            {
                InsertData.InsertTempUser(tempUser);

                return new ContentResult
                {
                    // to do: add page
                    Content = null,
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.OK
                };
            }
            else
            {
                return new ContentResult
                {
                    Content = "<div><h4>Error occured. Refresh page</h4></div>",
                    ContentType = "text/html",
                    StatusCode = (int)HttpStatusCode.InternalServerError
                };
            }
        }
    }
}
