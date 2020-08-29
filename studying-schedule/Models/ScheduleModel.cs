using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("schedule")]
    public class ScheduleModel
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("lecturer")]
        public int Lecturer { get; set; }

        [Required]
        [Column("studentsGroup")]
        public int StudentsGroup { get; set; }

        [Required]
        [Column("lecture")]
        public int Lecture { get; set; }

        [Required]
        [Column("lectureDateTimeStart")]
        public DateTime LectureDateTimeStart { get; set; }

        [Required]
        [Column("lectureDateTimeEnd")]
        public DateTime LectureDateTimeEnd { get; set; }
    }
}
