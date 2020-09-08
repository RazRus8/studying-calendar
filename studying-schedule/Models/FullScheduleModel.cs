using System;

namespace studying_schedule.Models
{
    public class FullScheduleModel
    {
        public string LecturerFullName { get; set; }
        public string StudentsGroupName { get; set; }
        public string LectureName { get; set; }
        public DateTime LectureDateTimeStart { get; set; }
        public DateTime LectureDateTimeEnd { get; set; }
    }
}
