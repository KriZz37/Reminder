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
    public class LoginController : ControllerBase
    {
        private readonly UserService userService;

        public LoginController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        public UserDto Login(LoginDto data)
        {
            return userService.Login(data);
        }
    }
}
