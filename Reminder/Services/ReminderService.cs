using Microsoft.EntityFrameworkCore;
using Reminder.Dtos;
using Reminder.Entities;
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
                    r.Comments.Count,
                    r.Id));
        }

        public IEnumerable<CommentDto> GetReminderComments(long reminderId)
        {
            return dbContext.Comments.Where(x => x.ReminderId == reminderId)
                .ToList().Select(c => new CommentDto(
                    c.Id,
                    c.Message));
        }

        public void CreateReminderComment(NewCommentDto data)
        {
            var reminder = dbContext.Reminders.SingleOrDefault(x => x.Id == data.ReminderId);

            if (reminder != null)
            {
                var newComment = new ReminderComment
                {
                    Message = data.Message
                };

                reminder.Comments.Add(newComment);
                dbContext.SaveChanges();
            }
        }

        public void DeleteComment(long commentId)
        {
            var comment = dbContext.Comments.SingleOrDefault(x => x.Id == commentId);

            dbContext.Comments.Remove(comment);
            dbContext.SaveChanges();
        }
    }
}
