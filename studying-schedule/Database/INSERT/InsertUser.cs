using System;

using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertUser
    {
        public static void Insert(UserModel user)
        {           
            try
            {
                using (AppContext db = new AppContext())
                {
                    db.UsersSet.Add(user);
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
