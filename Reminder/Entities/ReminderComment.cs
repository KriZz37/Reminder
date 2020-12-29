using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Entities
{
    public class ReminderComment
    {
        public long Id { get; set; }
        public string Message { get; set; }

        public long ReminderId { get; set; }
        public virtual Reminder Reminder { get; set; }
    }
}
