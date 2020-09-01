using System;
using System.Collections.Generic;
using System.Linq;
using studying_schedule.Models;

namespace studying_schedule.Database.SELECT
{
    public class SelectLecture
    {
        public static List<LectureModel> SelectAll()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    return db.LecturesSet.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}