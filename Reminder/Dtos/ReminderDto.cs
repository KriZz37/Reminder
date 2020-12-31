using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Dtos
{
    public record ReminderDto(
        string Name,
        string Date,
        int CommentCount);
}
