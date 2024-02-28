using api.Models.DTO;
using api.Service;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("email/")]
    [ApiController]
    public class EmailController(ILogger<EmailController> logger) : Controller
    {
        private readonly ILogger<EmailController> _logger = logger;
        private readonly string _emailAdm = "klabu2016@mail.ru";
        private readonly string _smtpKeyAdm = "cAdTFjtDXZeH7kqjTQA2";
        private readonly string _smtpHostAdm = "smtp.mail.ru";

        [HttpPost("send-to-server")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> SendToServerAsync([FromBody] CustomerDataDTO customerData)
        {
            EmailSendler email = new(_emailAdm, _smtpKeyAdm, _smtpHostAdm);

            try
            {
                await email.SendToAdmin(customerData.Email!, $"Questions on {customerData.Name}", $"<h3>{customerData.Message}</h3>");

                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}