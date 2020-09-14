using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using studying_schedule.Models.Info;

namespace studying_schedule.Database.DELETE
{
    public class DeleteStudent
    {
        public static bool Delete(SafeUserModel student)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var exist = db.StudentsGroupsSet.Where(stud => stud.StudentId == student.Id).FirstOrDefault();

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
