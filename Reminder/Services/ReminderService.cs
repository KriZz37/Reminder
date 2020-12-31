using Microsoft.EntityFrameworkCore;
using Reminder.Dtos;
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

        public long Create(NewReminderDto data)
        {
            var account = dbContext.Accounts.Include(x => x.Reminders)
                .SingleOrDefault(x => x.Id == data.AccountId);

            if (account != null)
            {
                var newReminder = new Entities.Reminder
                {
                    Name = data.Name,
                    Date = DateTime.ParseExact(data.Date, "dd-MM-yyyy", null)
                };

                account.Reminders.Add(newReminder);
                dbContext.SaveChanges();

                return newReminder.Id;
            }

            return -1;
        }

        public IEnumerable<ReminderDto> GetAllReminders(long accountId)
        {
            return dbContext.Reminders.Where(x => x.AccountId == accountId)
                .ToList().OrderBy(x => x.Date).Select(r => new ReminderDto(
                    r.Name,
                    r.Date.ToString("dd-MM-yyyy"),
                    r.Comments.Count));
        }
    }
}
