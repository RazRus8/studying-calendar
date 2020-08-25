using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("managers")]
    public class ManagerModel : IUser
    {
        [Key]
        [Column("managerId")]
        public int Id { get; set; }

        [Required]
        [Column("managerFirstName")]
        public string FirstName { get; set; }

        [Required]
        [Column("managerLastName")]
        public string LastName { get; set; }

        [Required]
        [Column("managerEmail")]
        public string Email { get; set; }

        [Required]
        [Column("managerPassword")]
        public string Password { get; set; }
    }
}
