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

        public static List<LectureModel> SelectAvailable()
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var lectureInSchedule = db.ScheduleSet.Select(lecture => lecture.LectureId).Distinct().ToList();
                    var lectures = db.LecturesSet.Where(lecture => !lectureInSchedule.Any(l => l == lecture.LectureId)).ToList();

                    // returns not in use groups only
                    return lectures;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}