using System;
using System.Collections.Generic;
using System.Linq;
using studying_schedule.Models;

namespace studying_schedule.Database.SELECT
{
    public class SelectGroup
    {
        public static List<GroupModel> SelectAll()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    return db.GroupsSet.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
