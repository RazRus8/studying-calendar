using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("user_roles")]
    public class UserRoleModel
    {
        [Key]
        [Column("roleId")]
        public int RoleId { get; set; }
        
        [Required]
        [Column("roleName")]
        public string RoleName { get; set; }
    }
}
