using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ZwajApp.API.Models;

namespace ZwajApp.API.Data.Repository.IRepository
{
    public interface IAuthRepository
    {
        //abstract -- headers of the method
        Task<User>Register(User user,string password);
        Task<User> Login(string username,string password);
         Task<bool> UserExists(string username);
        //userName uniq email or username
    }
}