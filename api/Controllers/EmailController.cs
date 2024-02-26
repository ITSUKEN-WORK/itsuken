using api.Models.DTO;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("email/")]
    public class EmailController : Controller
    {
        private readonly ILogger<EmailController> _logger;

        public EmailController(ILogger<EmailController> logger)
        {
            _logger = logger;
        }

        [HttpPost("send-to-server")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status503ServiceUnavailable)]
        public async Task<IActionResult> SendToServerAsync([FromBody] CustomerDataDTO customerData)
        {
            if (!ModelState.IsValid) return BadRequest();
            
            return Ok($"Hello! My name is {customerData.Name}. Email: {customerData.Email}." + "\n" + customerData.Message);
        }
    }
}