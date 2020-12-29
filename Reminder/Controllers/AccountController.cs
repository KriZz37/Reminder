using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reminder.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reminder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserService userService;

        public AccountController(UserService userService)
        {
            this.userService = userService;
        }

    }
}
