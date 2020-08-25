using System;
using System.IO;

namespace studying_schedule.HTML_dep
{
    public class HtmlParser
    {
        public static string ParseSignUpPage()
        {
            try
            {
                string htmlFile = File.ReadAllText("HTML/SignUpPage.html");

                return htmlFile;
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }

        public static string ParseSignInPage()
        {
            try
            {
                string htmlFile = File.ReadAllText("HTML/SignInPage.html");

                return htmlFile;
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }
        }
    }
}
