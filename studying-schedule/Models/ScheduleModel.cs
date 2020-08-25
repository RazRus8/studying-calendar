using System;
using System.ComponentModel.DataAnnotations;

namespace studying_schedule.Models
{
    public class ScheduleModel
    {
        [Key]
        public int Id { get; set; }
        public LecturerModel Lecturer { get; set; }
        public StudentsGroupModel StudentsGroup { get; set; }
        public LectureModel Lecture { get; set; }
        public DateTime LectureStartTime { get; set; }
        public DateTime LectureEndTime { get; set; }
    }
}
