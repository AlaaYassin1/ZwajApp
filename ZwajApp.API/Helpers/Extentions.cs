using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZwajApp.API.Helpers
{
    public static class Extentions
    {
        public static void AddApplicationError(this HttpResponse response, string meesage)
        {
            response.Headers.Add("Application-Error", meesage);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}