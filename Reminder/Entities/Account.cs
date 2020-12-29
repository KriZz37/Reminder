using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Entities
{
    public class Account
    {
        public Account()
        {
            Reminders = new Collection<Reminder>();
        }

        public long Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public ICollection<Reminder> Reminders { get; set; }
    }
}
