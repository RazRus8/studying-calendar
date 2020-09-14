using System;
using System.Linq;
using studying_schedule.Models.Info;

namespace studying_schedule.Database.UPDATE
{
    public class UpdatePassword
    {
        public static bool Update(ChangePasswordModel user)
        {
            try
            {
                using (AppContext db = new AppContext())
                {
                    bool accept = db.UsersSet.Any(u => u.Id == user.Id && u.Password == user.OldPassword);

                    if (accept)
                    {
                        var userChange = db.UsersSet.Where(u => u.Id == user.Id).FirstOrDefault();

                        userChange.Password = user.NewPassword;

                        db.Update(userChange);
                        db.SaveChanges();

                        return true;
                    }

                    return false;
                }
            }
            catch(Exception ex)
            {
                throw new Exception(ex.ToString());
            }
        }
    }
}
