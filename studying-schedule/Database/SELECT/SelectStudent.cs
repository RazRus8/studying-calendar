using System;
using System.Collections.Generic;
using System.Linq;
using studying_schedule.Models;
using studying_schedule.Models.Info;

namespace studying_schedule.Database.SELECT
{
    public class SelectStudent
    {
        public static List<SafeUserModel> SelectAvailable()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var studentsInGroups = db.StudentsGroupsSet.Select(student => student.StudentId).ToList();
                    var students = db.UsersSet.Where(student => studentsInGroups.All(s => s != student.Id) && student.Role == 1)
                                              .Select(u => new SafeUserModel
                                              {
                                                  Id = u.Id,
                                                  Role = u.Role,
                                                  FirstName = u.FirstName,
                                                  LastName = u.LastName
                                              }).ToList();

                    // returns students that have no group
                    return students;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public static List<SafeUserModel> Select(GroupModel group)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var users = db.StudentsGroupsSet.Where(g => g.GroupId == group.GroupId).Select(u => u.StudentId).ToList();
                    var students = db.UsersSet.Where(user => users.Any(u => u == user.Id)).ToList();
                    var safestud = students.Select(student => new SafeUserModel
                    {
                        Id = student.Id,
                        Role = student.Role,
                        FirstName = student.FirstName,
                        LastName = student.LastName
                    }).ToList();

                    // returns students that have a spesific group
                    return safestud;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
