using System;
using System.Linq;
using studying_schedule.Models;
using studying_schedule.Models.Info;
using studying_schedule.Models.UserInterface;

namespace studying_schedule.Database.SELECT
{
    public class SelectPassword
    {
        public static SafeUserModel ValidateUser(UserModel user)
        {
            // to do: make method async
            try
            {
                using (AppContext db = new AppContext())
                {
                    var acceptUser = db.UsersSet.FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password);

                    if (acceptUser != null)
                    {
                        var safeUser = new SafeUserModel
                        {
                            Id = acceptUser.Id,
                            Role = acceptUser.Role,
                            FirstName = acceptUser.FirstName,
                            LastName = acceptUser.LastName
                        };

                        return safeUser;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

            throw new NotImplementedException();
        }
    }
}
