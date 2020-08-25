using System;
using System.ComponentModel.DataAnnotations;

namespace studying_schedule.Models
{
    public class StudentsGroupModel
    {
        [Key]
        public int GroupId { get; set; }

        [Required]
        public string GroupName { get; set; }
    }
}
