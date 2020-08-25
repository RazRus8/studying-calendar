using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("lecturers")]
    public class LecturerModel : IUser
    {
        [Key]
        [Column("lecturerId")]
        public int Id { get; set; }

        [Required]
        [Column("lecturerFirstName")]
        public string FirstName { get; set; }

        [Required]
        [Column("lecturerLastName")]
        public string LastName { get; set; }

        [Required]
        [Column("lecturerEmail")]
        public string Email { get; set; }

        [Required]
        [Column("lecturerPassword")]
        public string Password { get; set; }
    }
}
