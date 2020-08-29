using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace studying_schedule.Models.SignIn
{
    public class SignInModel
    {
        public int Id { get; set; }
        public int RoleId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
