using System;
using System.Linq;
using System.Collections.Generic;
using studying_schedule.Models.Info;

namespace studying_schedule.Database.SELECT
{
    public class SelectUser
    {
        public static List<SafeUserModel> SelectAllTeachers()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    return db.UsersSet.Where(user => user.Role == 2)
                                      .ToList()
                                      .Select(teacher => new SafeUserModel
                                      { 
                                          Id = teacher.Id,
                                          Role = teacher.Role,
                                          FirstName = teacher.FirstName,
                                          LastName = teacher.LastName
                                      }).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
