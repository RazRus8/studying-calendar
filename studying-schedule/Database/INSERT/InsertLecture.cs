using System;
using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertLecture
    {
        public static void Insert(LectureModel lecture)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    db.LecturesSet.Add(lecture);
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
