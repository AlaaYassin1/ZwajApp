using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string userName { get; set; }
        [StringLength(8, MinimumLength = 4, ErrorMessage = "يجب أن لا تزيد كلمة السر عن أربعة أحرف ولا تقل عن ثمانية")]
       [Required]
        public string password { get; set; }
    }
}
