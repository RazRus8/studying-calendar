using System;
using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertStudent
    {
        public static void Insert(StudentsGroupsModel model)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    db.StudentsGroupsSet.Add(model);
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
