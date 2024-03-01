using api.Models.DTO;
using api.Service;
using Microsoft.AspNetCore.Mvc;

using static api.WC;

namespace api.Controllers
{
    [Route("email/")]
    [ApiController]
    public class EmailController() : Controller
    {
        [HttpPost("send-to-server")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SendToServerAsync([FromBody] CustomerDataDTO customerData)
        {
            EmailSendler email = new(EMAIL_ADMIN, SMTP_KEY_ADMIN, SMTP_HOST_ADMIN);

            try
            {
                await email.SendToAdmin(customerData.Email!, $"Questions on {customerData.Name}", $"<h3>{customerData.Message}</h3>");

                return Ok("Email has been sanded");
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}