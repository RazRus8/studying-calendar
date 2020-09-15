using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using studying_schedule.Models;

namespace studying_schedule.Database
{
    public class AppContext : DbContext
    {
        private readonly string connectionString = @"server=localhost;database=studying_calendar_db;trusted_connection=true;";

        public DbSet<UserModel> UsersSet { get; set; } // users table
        public DbSet<StudentsGroupsModel> StudentsGroupsSet { get; set; } // students_groups table
        public DbSet<GroupModel> GroupsSet { get; set; } // groups table
        public DbSet<LectureModel> LecturesSet { get; set; } // lectures table
        public DbSet<ScheduleModel> ScheduleSet { get; set; } // schedule table
        public DbSet<UserRoleModel> RolesSet { get; set; } // roles table

        public AppContext()
        {
            Database.EnsureCreated();
        }
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connectionString);
            }
        }
    }
}
