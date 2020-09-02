using System;
using System.Linq;
using System.Collections.Generic;
using studying_schedule.Models;

namespace studying_schedule.Database.SELECT
{
    public class SelectUser
    {
        public static List<UserModel> SelectAllLecturers()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    return db.UsersSet.Where(user => user.Role == 2).ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
