using System;
using System.ComponentModel.DataAnnotations;

namespace studying_schedule.Models
{
    interface UserRole
    {
        [Key]
        public int RoleId { get; set; }
        
        [Required]
        public string RoleName { get; set; }
    }
}
