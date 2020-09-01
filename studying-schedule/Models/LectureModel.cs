using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("lectures")]
    public class LectureModel
    {
        [Key]
        [Column("lectureId")]
        public int LectureId { get; set; }

        [Column("lectureName")]
        public string LectureName { get; set; }
    }
}
