using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Entities
{
    public class Reminder
    {
        public Reminder()
        {
            Comments = new Collection<ReminderComment>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public ICollection<ReminderComment> Comments { get; set; }

        public long AccountId { get; set; }
        public virtual Account Account { get; set; }
    }
}
