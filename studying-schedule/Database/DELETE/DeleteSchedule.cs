using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using studying_schedule.Models;

namespace studying_schedule.Database.DELETE
{
    public class DeleteSchedule
    {
        public static bool Delete(ScheduleModel schedule)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var exist = db.ScheduleSet.Where(s => s.Id == schedule.Id).FirstOrDefault();

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
