using System;

namespace studying_schedule.Models.Interface
{
    public interface IUser
    {
        public int Id { get; set; }
        public byte Role { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
