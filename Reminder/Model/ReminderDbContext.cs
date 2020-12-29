using Microsoft.EntityFrameworkCore;
using Reminder.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Model
{
    public class ReminderDbContext : DbContext
    {
        public ReminderDbContext(DbContextOptions<ReminderDbContext> options): base(options) { }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Entities.Reminder> Reminders { get; set; }
        public DbSet<ReminderComment> Comments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
