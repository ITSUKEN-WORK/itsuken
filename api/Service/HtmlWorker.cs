using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Service
{
    public static class HtmlWorker
    {
        public static string GetAdminMessage(string? name, string? email, string? message)
        {
            return
            @$"
            <div class='message-box' style='background: #FFFFFF; width: 570px; height: 440px; border-radius: 20px;'>
                <div class='navbar-box' style='background: #D1CA1D; width: 570px; height: 60px; border-radius: 20px 20px 0 0;'></div>
                <div class='title-box' style='position: relative; margin-left: 20px;'>
                    <p style='font-family: Courier, monospace; font-size: 25px;'>
                        <strong>Name:</strong>
                        {name}
                    </p>
                    <p style='font-family: Courier, monospace; font-size: 20px;'>
                        <strong>Email:</strong>
                        {email}
                    </p>
                </div>
                <div class='text-box' style='background: #D9D9D9; width: 570px; height: 250px; border-radius: 0 0 20px 20px; margin-top: 0px'>
                    <p style='font-family: Courier, monospace; font-size: 15px; padding: 40px 0 0 20px;'>
                        {message}
                    </p>
                </div>
            </div>
            ";
        }
    }
}