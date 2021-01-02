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

        public void removeAccount(long accountId)
        {
            var account = dbContext.Accounts.SingleOrDefault(x => x.Id == accountId);

            if (account != null)
            {
                dbContext.Accounts.Remove(account);
                dbContext.SaveChanges();
            }
        }

        public UserDto Login(LoginDto data)
        {
            var account = dbContext.Accounts.SingleOrDefault(x => x.Login == data.Login);
            if (account == null)
            {
                return null;
            }

            var hash = GetHash(data.Password);
            if (account.Password == hash)
            {
                return new(account.Id, "empty token");
            }

            return null;
        }

        public bool ChangePassword(PasswordDto data)
        {
            var account = dbContext.Accounts.SingleOrDefault(x => x.Id == data.AccountId);

            if (account != null)
            {
                var dbPassword = account.Password;
                var currentPassword = GetHash(data.CurrentPassword);

                if (dbPassword == currentPassword)
                {
                    account.Password = GetHash(data.NewPassword);
                    dbContext.SaveChanges();
                    return true;
                }
            }

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
