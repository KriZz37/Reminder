using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reminder.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Controllers
{
    [Route("api/reminder/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ReminderService reminderService;

        public CommentController(ReminderService reminderService)
        {
            this.reminderService = reminderService;
        }

    }
}
