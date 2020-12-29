using Microsoft.Extensions.Configuration;
using Reminder.Dtos;
using Reminder.Entities;
using Reminder.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Reminder.Services
{
    public class UserService
    {
        private readonly ReminderDbContext dbContext;
        private readonly IConfiguration configuration;

        public UserService(ReminderDbContext dbContext,
            IConfiguration configuration)
        {
            this.dbContext = dbContext;
            this.configuration = configuration;
        }

        public bool Register(RegisterDto data)
        {
            var login = data.Login.Trim().ToLower();
            var password = data.Password;

            if (login.Length < 4 || password.Length < 4 || login.Contains(' '))
            {
                return true;
            }

            var loginExists = dbContext.Accounts.Any(x => x.Login == data.Login);
            if (loginExists)
            {
                return true;
            }

            var newUser = new Account
            {
                Login = login,
                Password = GetHash(password)
            };

            dbContext.Accounts.Add(newUser);
            dbContext.SaveChanges();
            return false;
        }

        private string GetHash(string password)
        {
            var algorythm = SHA256.Create();

            StringBuilder sb = new StringBuilder();
            foreach (var b in algorythm.ComputeHash(Encoding.UTF8.GetBytes(password)))
            {
                sb.Append(b.ToString("X2"));
            }

            return sb.ToString();
        }
    }
}
