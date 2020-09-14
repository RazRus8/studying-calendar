using System;

namespace studying_schedule.Models.Info
{
    public class SafeUserModel
    {
        public int Id { get; set; }

        public byte Role { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string FullName { get { return $"{FirstName} {LastName}"; } }
    }
}
