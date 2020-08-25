using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("temp_users")]
    public class TempUserModel : IUser
    {
        [Key]
        [Column("userId")]
        public int Id { get; set; }
        
        [Required]
        [Column("userFirstName")]
        public string FirstName { get; set; }
        
        [Required]
        [Column("userLastName")]
        public string LastName { get; set; }
        
        [Required]
        [Column("userEmail")]
        public string Email { get; set; }
        
        [Required]
        [Column("userPassword")]
        public string Password { get; set; }
        
        [Required]
        [Column("userRole")]
        public int Role { get; set; }
    }
}
