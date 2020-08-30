using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("students_groups")]
    public class StudentsGroupModel
    {
        [Key]
        [Column("groupId")]
        public int GroupId { get; set; }

        [Required]
        [Column("studentId")]
        public string StudentId { get; set; }

        [Required]
        [Column("groupName")]
        public string GroupName { get; set; }
    }
}
