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
    public class RegisterController : ControllerBase
    {
        private readonly UserService userService;

        public RegisterController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        public bool Register(RegisterDto data)
        {
            var registerError = userService.Register(data);

            return registerError;
        }
    }
}
