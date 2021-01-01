using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Dtos
{
    public record NewCommentDto(
        string Message,
        long ReminderId);
}
