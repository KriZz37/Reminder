using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reminder.Dtos;
using Reminder.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReminderController : ControllerBase
    {
        private readonly ReminderService reminderService;

        public ReminderController(ReminderService reminderService)
        {
            this.reminderService = reminderService;
        }

        [HttpPost]
        public long Create(NewReminderDto data)
        {
            return reminderService.Create(data);
        }

        [HttpGet("{accountId}")]
        public IEnumerable<ReminderDto> GetAll(long accountId)
        {
            return reminderService.GetAllReminders(accountId);
        }

        [HttpGet("between/{accountId}")]
        public IEnumerable<ReminderDto> GetBetween(string from, string to, long accountId)
        {
            return reminderService.GetRemindersBetween(from, to, accountId);
        }

        [HttpDelete("{reminderId}")]
        public void Delete(long reminderId)
        {
            reminderService.RemoveReminder(reminderId);
        }

        [HttpPut]
        public void Edit(ReminderDto data)
        {
            reminderService.EditReminder(data);
        }
    }
}
