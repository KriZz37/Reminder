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
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserService userService;

        public AccountController(UserService userService)
        {
            this.userService = userService;
        }

        [HttpPut("password")]
        public bool Password(PasswordDto data)
        {
            var passwordChanged = userService.ChangePassword(data);

            return passwordChanged;
        }

        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            userService.removeAccount(id);
        }
    }
}
