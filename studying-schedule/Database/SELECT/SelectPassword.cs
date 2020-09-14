using System;
using System.Linq;
using studying_schedule.Models;
using studying_schedule.Models.UserInterface;

namespace studying_schedule.Database.SELECT
{
    public class SelectPassword
    {
        public static UserModel ValidateUser(UserModel user)
        {
            // to do: make method async
            try
            {
                using (AppContext db = new AppContext())
                {
                    var client = db.UsersSet.FirstOrDefault(u => u.Email == user.Email && u.Password == user.Password);

                    if (client != null)
                    {
                        return SetModel(client);
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

        private static UserModel SetModel(IUser user)
        {
            return new UserModel
            {
                Id = user.Id,
                Role = user.Role,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }
    }
}
