using Microsoft.AspNetCore.Authorization;
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
    [Authorize]
    [Route("api/reminder/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ReminderService reminderService;

        public CommentController(ReminderService reminderService)
        {
            this.reminderService = reminderService;
        }

        [HttpGet("{reminderId}")]
        public IEnumerable<CommentDto> Get(long reminderId)
        {
            return reminderService.GetReminderComments(reminderId);
        }

        [HttpPost]
        public void Create(NewCommentDto data)
        {
            reminderService.CreateReminderComment(data);
        }

        [HttpDelete("{commentId}")]
        public void Delete(long commentId)
        {
            reminderService.DeleteComment(commentId);
        }
    }
}
