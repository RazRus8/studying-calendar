using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("users")]
    public class UserModel : IUser
    {
        [Key]
        [Column("userId")]
        public int Id { get; set; }

        [Column("userRole")]
        public byte Role { get; set; }

        [Column("userFirstName")]
        public string FirstName { get; set; }

        [Column("userLastName")]
        public string LastName { get; set; }

        [Column("userEmail")]
        public string Email { get; set; }

        [Column("userPassword")]
        public string Password { get; set; }
    }
}
