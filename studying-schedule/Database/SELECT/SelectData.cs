using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using studying_schedule.Models;

namespace studying_schedule.Database.SELECT
{
    public class SelectData
    {
        public static int ValidateUser(IUser user)
        {
            // to do: make method async
            try
            {
                using (AppContext db = new AppContext())
                {
                    foreach (StudentModel student in db.StudentsSet)
                    {
                        if (user.Email == student.Email && user.Password == student.Password)
                        {
                            return 1;
                        }
                    }

                    foreach (LecturerModel lecturer in db.LecturersSet)
                    {
                        if (user.Email == lecturer.Email && user.Password == lecturer.Password)
                        {
                            return 2;
                        }
                    }

                    foreach (ManagerModel manager in db.ManagersSet)
                    {
                        if (user.Email == manager.Email && user.Password == manager.Password)
                        {
                            return 3;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.ToString());
            }

            return -1;
        }
    }
}
