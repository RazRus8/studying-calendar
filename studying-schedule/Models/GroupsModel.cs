using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("groups")]
    public class GroupsModel
    {
        [Key]
        [Column("groupId")]
        public int GroupId { get; set; }

        [Required]
        [Column("groupName")]
        public string GroupName { get; set; }
    }
}