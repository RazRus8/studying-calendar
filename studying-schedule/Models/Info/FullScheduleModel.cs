using System;

namespace studying_schedule.Models.Info
{
    public class FullScheduleModel
    {
        public int Id { get; set; }
        public string TeacherFullName { get; set; }
        public string StudentsGroupName { get; set; }
        public string LectureName { get; set; }
        public DateTime LectureDateTimeStart { get; set; }
        public DateTime LectureDateTimeEnd { get; set; }
    }
}
