using api.Models.DTO;
using MailKit.Net.Smtp;
using MimeKit;

namespace api.Service
{
    public class EmailSendler(string emailFrom, string smtpKey, string smtpHost, int port = 587)
    {
        private readonly string _smtpKey = smtpKey;
        private readonly string _emailFrom = emailFrom;
        private readonly string _smtpHost = smtpHost;
        private readonly int _port = port;

        public async Task Send(string email, string subject, string message)
        {
            using var emailMessage = new MimeMessage();
 
            emailMessage.From.Add(new MailboxAddress("Администрация сайта itsuken", _emailFrom));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };
             
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.yandex.ru", 25, false);
                await client.AuthenticateAsync("login@yandex.ru", "password");
                await client.SendAsync(emailMessage);
 
                await client.DisconnectAsync(true);
            }
        }

        public async Task SendToAdmin(CustomerDataDTO customerData)
        {
            using var emailMessage = new MimeMessage();
 
            emailMessage.From.Add(new MailboxAddress("itsuken.MessageCustomer", _emailFrom));
            emailMessage.To.Add(new MailboxAddress("", _emailFrom));
            emailMessage.Subject = $"Questions on {customerData.Name}" + " - " + customerData.Email;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = HtmlWorker.GetAdminMessage(customerData.Name, customerData.Email, customerData.Message)
            };
             
            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(_smtpHost, _port, false);
                await client.AuthenticateAsync(_emailFrom, _smtpKey);
                await client.SendAsync(emailMessage);
 
                await client.DisconnectAsync(true);
            }
        }
    }
}