using Reminder.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Services
{
    public class ReminderService
    {
        private readonly ReminderDbContext dbContext;

        public ReminderService(ReminderDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

    }
}
