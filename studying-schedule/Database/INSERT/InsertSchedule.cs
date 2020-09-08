using System;
using System.Collections.Generic;
using studying_schedule.Models;

namespace studying_schedule.Database.INSERT
{
    public class InsertSchedule
    {
        public static void Insert(List<ScheduleModel> schedules)
        {
            try
            {
                foreach (ScheduleModel schedule in schedules)
                {
                    using (AppContext db = new AppContext())
                    {
                        db.ScheduleSet.Add(schedule);
                        db.SaveChanges();
                    }
                }    
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
