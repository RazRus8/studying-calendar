using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace studying_schedule.Models
{
    [Table("students")]
    public class StudentModel : IUser
    {
        [Key]
        [Column("studentId")]
        public int Id { get; set; }

        [Required]
        public int StudentGroup { get; set; }

        [Required]
        [Column("studentFirstName")]
        public string FirstName { get; set; }

        [Required]
        [Column("studentLastName")]
        public string LastName { get; set; }

        [Required]
        [Column("studentEmail")]
        public string Email { get; set; }

        [Required]
        [Column("studentPassword")]
        public string Password { get; set; }
    }
}
