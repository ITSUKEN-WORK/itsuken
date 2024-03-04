using System.ComponentModel.DataAnnotations;

namespace api.Models.DTO
{
    public class CustomerDataDTO
    {
        [Required]
        [Length(3, 15)]
        public string? Name { get; set; }
        
        [Required]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        [Length(15, 100)]
        public string? Message { get; set; }
    }
}