using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using studying_schedule.Models;
using studying_schedule.Models.SignIn;

namespace studying_schedule.Database.SELECT
{
    public class SelectData
    {
        public static SignInModel ValidateUser(IUser user)
        {
            // to do: make method async
            try
            {
                using (AppContext db = new AppContext())
                {
                    var student = db.StudentsSet.Where(stud => stud.Email == user.Email)
                                                .Where(stud => stud.Password == user.Password)
                                                .FirstOrDefault();
                    
                    var lecturer = db.LecturersSet.Where(lect => lect.Email == user.Email)
                                                  .Where(lect => lect.Password == user.Password)
                                                  .FirstOrDefault();
                    
                    var manager = db.ManagersSet.Where(man => man.Email == user.Email)
                                                .Where(man => man.Password == user.Password)
                                                .FirstOrDefault();

                    if (student != null)
                    {
                        return SetModel(student, 1);
                    }
                    else if (lecturer != null)
                    {
                        return SetModel(lecturer, 2);
                    }
                    else if (manager != null)
                    {
                        return SetModel(manager, 3);
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

        private static SignInModel SetModel(IUser user, int roleId)
        {
            return new SignInModel
            {
                Id = user.Id,
                RoleId = roleId,
                FirstName = user.FirstName,
                LastName = user.LastName
            };
        }
    }
}
