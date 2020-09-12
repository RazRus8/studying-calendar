using System;
using System.Collections.Generic;
using System.Linq;
using studying_schedule.Models;

namespace studying_schedule.Database.SELECT
{
    public class SelectGroup
    {
        public static List<GroupModel> SelectAvailable()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var groupInSchedules = db.ScheduleSet.Select(group => group.StudentsGroup).Distinct().ToList();
                    var groups = db.GroupsSet.Where(group => !groupInSchedules.Any(g => g == group.GroupId)).ToList();

                    // returns not in use groups only
                    return groups;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
