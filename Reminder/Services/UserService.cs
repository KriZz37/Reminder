using Microsoft.Extensions.Configuration;
using Reminder.Model;
using System;
using System.Collections.Generic;
using System.Linq;
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

    }
}
