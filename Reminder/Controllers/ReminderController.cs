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
    }
}
