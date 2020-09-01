using System;
using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertGroup
    {
        public static void Insert(GroupModel group)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    db.GroupsSet.Add(group);
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
