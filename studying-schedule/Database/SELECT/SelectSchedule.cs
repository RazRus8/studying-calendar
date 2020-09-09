using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using studying_schedule.Models;
using studying_schedule.Models.Info;

namespace studying_schedule.Database.SELECT
{
    public class SelectSchedule
    {
        public static List<FullScheduleModel> SelectFor(MonthYearModel monthYear)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var schedules = db.ScheduleSet.Where(year => year.LectureDateTimeStart.Year == monthYear.Year)
                                                  .Where(month => month.LectureDateTimeStart.Month == monthYear.Month)
                                                  .ToList();

                    return Convert(schedules);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        public static List<FullScheduleModel> SelectForUser(UserInfo user)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var groupId = db.StudentsGroupsSet.Where(g => g.StudentId == user.UserId).Select(g => g.GroupId).FirstOrDefault();
                    
                    if (groupId != 0)
                    {
                        var schedules = db.ScheduleSet.Where(year => year.LectureDateTimeStart.Year == user.Year)
                                                      .Where(month => month.LectureDateTimeStart.Month == user.Month)
                                                      .Where(g => g.StudentsGroup == groupId)
                                                      .ToList();

                        return Convert(schedules);
                    }

                    return null;
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }

        private static List<FullScheduleModel> Convert(List<ScheduleModel> schedules)
        {
            try
            {
                var fullInfoSchedules = new List<FullScheduleModel>();

                using (AppContext db = new AppContext())
                {
                    foreach (ScheduleModel model in schedules)
                    {
                        string fullName = db.UsersSet.Where(user => user.Id == model.Lecturer)
                                                     .Select(x => ($"{x.FirstName} {x.LastName}"))
                                                     .FirstOrDefault();

                        string group = db.GroupsSet.Where(group => group.GroupId == model.StudentsGroup)
                                                   .Select(x => x.GroupName)
                                                   .FirstOrDefault();

                        string lecture = db.LecturesSet.Where(lect => lect.LectureId == model.Lecture)
                                                       .Select(x => x.LectureName)
                                                       .FirstOrDefault();

                        var schedule = new FullScheduleModel
                        {
                            LecturerFullName = fullName,
                            StudentsGroupName = group,
                            LectureName = lecture,
                            LectureDateTimeStart = model.LectureDateTimeStart,
                            LectureDateTimeEnd = model.LectureDateTimeEnd
                        };

                        fullInfoSchedules.Add(schedule);
                    }

                    return fullInfoSchedules;
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
