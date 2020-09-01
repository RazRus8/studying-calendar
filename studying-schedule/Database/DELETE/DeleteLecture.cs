using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using studying_schedule.Models;

namespace studying_schedule.Database.DELETE
{
    public class DeleteLecture
    {
        public static bool Delete(LectureModel lecture)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var exist = db.LecturesSet.Where(l => l.LectureId == lecture.LectureId).FirstOrDefault();

                    if (exist != null)
                    {
                        db.Entry(exist).State = EntityState.Deleted;
                        db.SaveChanges();

                        return true;
                    }
                }

                return false;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
