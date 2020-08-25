using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertData
    {
        public static void InsertTempUser(TempUserModel user)
        {           
            try
            {
                using (AppContext db = new AppContext())
                {
                    db.TempUsersSet.Add(user);
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
