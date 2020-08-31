using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("students_groups")]
    public class StudentsGroupsModel
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("studentId")]
        public UserModel StudentId { get; set; }

        [Required]
        [Column("groupId")]
        public GroupModel GroupId { get; set; }
    }
}
