using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using studying_schedule.Models;

namespace studying_schedule.Database.DELETE
{
    public class DeleteGroup
    {
        public static bool Delete(GroupModel group)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    var exist = db.GroupsSet.Where(g => g.GroupId == group.GroupId).FirstOrDefault();

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
