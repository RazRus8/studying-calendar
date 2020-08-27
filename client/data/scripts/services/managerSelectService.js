(function()
{
    "use strict";

    app.service("managerSelectService", function()
    {
        this.setTime = function()
        {
            var hours = [];
            var minutes = [];
            var time = {initH: null, initM: null};

            for (var i = 1; i <= 24; i++)
            {
                hours.push({ key: i, value: i.toString() });
            }

            for (var j = 0; j <= 55; j += 5)
            {
                if (j < 10)
                {
                    minutes.push({ key: j, value: "0" + j.toString() });
                }
                else
                {
                    minutes.push({ key: j, value: j.toString() });
                }
            }
            
            time["hours"] = hours;
            time["minutes"] = minutes;

            return time;
        }
    });
}());