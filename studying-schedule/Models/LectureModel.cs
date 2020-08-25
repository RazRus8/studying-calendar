using System;
using System.ComponentModel.DataAnnotations;

namespace studying_schedule.Models
{
    public class LectureModel
    {
        [Key]
        public int LectureId { get; set; }

        [Required]
        public string LectureName { get; set; }
    }
}
