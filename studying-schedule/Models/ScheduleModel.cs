using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("schedule")]
    public class ScheduleModel
    {
        private DateTime lectureDateTimeStart;
        private DateTime lectureDateTimeEnd;

        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("teacherId")]
        public int TeacherId { get; set; }

        [Column("studentsGroup")]
        public int StudentsGroup { get; set; }

        [Column("lectureId")]
        public int LectureId { get; set; }

        [Column("lectureDateTimeStart")]
        public DateTime LectureDateTimeStart
        {
            get { return lectureDateTimeStart; }
            set
            {
                lectureDateTimeStart = value.ToLocalTime();
            }
        }

        [Column("lectureDateTimeEnd")]
        public DateTime LectureDateTimeEnd
        {
            get { return lectureDateTimeEnd; }
            set
            {
                lectureDateTimeEnd = value.ToLocalTime();
            }
        }
    }
}
