using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("groups")]
    public class GroupModel
    {
        [Key]
        [Column("groupId")]
        public int GroupId { get; set; }

        [Column("groupName")]
        public string GroupName { get; set; }
    }
}